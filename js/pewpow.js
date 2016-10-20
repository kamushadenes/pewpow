    var settings = {
        // The data properties to parse into numbers
        numberProps: ["dport", "latitude", "longitude", "latitude2", "longitude2"],
        // Flash this color as statistics udpate
        triggerColor: "red",
        // Range text down to this opacity
        minTextOpacity: 0.35,
        // Begin dropping attacks after this number
        maxAttacks: 1000,
        radius: 5,
        countryColor: d3.scale.log()
            .domain([1, 1200])
            .range([d3.rgb(30, 30, 30), d3.rgb(30, 65, 140)]),
        tableBarWidth: d3.scale.log()
            .domain([1, 500])
            .range([1, 130]),

        // Layout settings
        linkAnchor: false,
        linkSiblings: false,

        // Table Rows
        topTableRows: 10,
        portTableRows: 10,
        consoleTableRows: 10,
        pruneInterval: 3600,
        dataPruneInterval: 60,

        // Websocket settings
        wsHost: "ws://localhost:8080/",
        psk: "18c989796c61724d4661b019f2779848dd69ae62",
        wsTimeout: 30000
    };


// setup default min/max timer range for random draw
attack_min = 100 ;
attack_max = 2000 ;


data_countries = {};
data_countries2 = {};
data_services = [];

audio_type = [ "starwars", "tng", "b5", "wargames", "pew", "galaga", "asteroids" ]


// we maintain a fixed queue of "attacks" via this class
function FixedQueue( size, initialValues ){
  initialValues = (initialValues || []);
  var queue = Array.apply( null, initialValues );
  queue.fixedSize = size;
  queue.push = FixedQueue.push;
  queue.splice = FixedQueue.splice;
  queue.unshift = FixedQueue.unshift;
  FixedQueue.trimTail.call( queue );
  return( queue );
}

FixedQueue.trimHead = function(){
  if (this.length <= this.fixedSize){ return; }
  Array.prototype.splice.call( this, 0, (this.length - this.fixedSize) );
};

FixedQueue.trimTail = function(){
  if (this.length <= this.fixedSize) { return; }
  Array.prototype.splice.call( this, this.fixedSize, (this.length - this.fixedSize)
  );
};

FixedQueue.wrapMethod = function( methodName, trimMethod ){
  var wrapper = function(){
    var method = Array.prototype[ methodName ];
    var result = method.apply( this, arguments );
    trimMethod.call( this );
    return( result );
  };
  return( wrapper );
};

FixedQueue.push = FixedQueue.wrapMethod( "push", FixedQueue.trimHead );
FixedQueue.splice = FixedQueue.wrapMethod( "splice", FixedQueue.trimTail );
FixedQueue.unshift = FixedQueue.wrapMethod( "unshift", FixedQueue.trimTail );

var map = new Datamap({

    scope: 'world',
    element: document.getElementById('container1'),
    //projection: 'winkel3',
    projection: 'equirectangular',
    // change the projection to something else only if you have absolutely no cartographic sense

    fills: { defaultFill: 'black', },

    geographyConfig: {
      dataUrl: null,
      hideAntarctica: false,
      borderWidth: 0.75,
      //borderColor: '#4393c3',
      borderColor: '#00b388',
      popupTemplate: function(geography, data) {
        return '<div class="hoverinfo" style="color:white;background:black">' +
               geography.properties.name + '</div>';
      },
      popupOnHover: true,
      highlightOnHover: true,
      highlightFillColor: '#00b388',
      highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
      highlightBorderWidth: 2
    },

  });

// we read in a modified file of all country centers
var centers = [] ;
d3.tsv("data/country_centroids_primary.csv", function(data) { centers = data; });
d3.csv("data/samplatlong.csv", function(data) { slatlong = data; });
d3.csv("data/cnlatlong.csv", function(data) { cnlatlong = data; });

// setup structures for the "hits" (arcs)
// and circle booms

var hits = FixedQueue( 20, [  ] );
var boom = FixedQueue( 20, [  ] );

    var wsDiscTime = 0;

    function start(loc, psk) {
        var webSocket = new WebSocket(loc || settings.wsHost);

        var pauser = {
            elt: d3.selectAll(".controls"),
            _buffer: [],

            unbuffer: function(d) {
                while (this._buffer.length > 0) {
                    this.insert(this._buffer.shift());
                }
                statsManager.redraw();
            },

            insert: function(d) {
                nodeModel.pushAttack(d);
                statsManager.insert(d);
                for (var model in linkModels) {
                    linkModels[model].insert(d);
                }
                rateTicker.push(d);

                d.pruneTS = new Date().getTime() / 1000 + settings.pruneInterval;
                timestampedData.push(d);
            },

            push: function(d) {
                if (this.paused()) {
                    this._buffer.push(d);
                } else {
                    this.insert(d);
                    statsManager.redraw();
                }
            },

            paused: function() {
                return this.elt.node().dataset.paused === "true";
            },

            toggle: function() {
                var dataset = this.elt.node().dataset;
                var button = d3.selectAll(".play-pause");

                if (this.paused()) {
                    button.classed("icon-play", false);
                    button.classed("icon-pause", true);
                    this.elt.node().dataset.paused = "false";
                    this.unbuffer();
                } else {
                    button.classed("icon-pause", false);
                    button.classed("icon-play", true);
                    this.elt.node().dataset.paused = "true";
                }
            }
        }
        pauser.elt.on("click", function() { pauser.toggle(); });

        webSocket.onopen = function() {
            wsDiscTime = 0;
            d3.select("#events-data").selectAll("tr.row").remove();
            webSocket.send(psk || settings.psk);
        };

        webSocket.onmessage = function(evt) {
            if (!evt) {
                return;
            }

            // Parse the json to a js obj and clean the data
            var datum = eval("(" + evt.data + ")");

            if (datum.longitude == 0 && datum.latitude == 0) {
                datum.longitude = -5;
                datum.latitude = -50;
            }

	    var projection = d3.geo.winkel3();
            var startLoc = projection([datum.longitude, datum.latitude]);
            var endLoc = projection([datum.longitude2, datum.latitude2]);

            if (datum.error) {
                showMessage("ERROR: " + datum.error.msg);
            }

            for (var prop in datum) {
                if (settings.numberProps.indexOf(prop) !== -1) {
                    datum[prop] = Number(datum[prop]);
                }
            }

            function cleanCountry(country) {
                // Clean incoming country code
                if (country === "USA") {
                    return "US";
                }
                return country
            }

            datum.country = cleanCountry(datum.country);
            datum.country2 = cleanCountry(datum.country2);

            //datum.service = datum.dport; //datum.dport in ports ? ports[datum.dport] : undefined;
            datum.cx = startLoc[0];
            datum.cy = startLoc[1];
            datum.x = startLoc[0];
            datum.y = startLoc[1];
            datum.targetX = endLoc[0];
            datum.targetY = endLoc[1];
            datum.id = 0; //getID();
            datum.datetime = (new Date()).toISOString()
	        .replace("T", "&ensp;")
	        .slice(0, -2);

            // no guarantee of sound playing w/o the load - stupid browsers
            //if (typeof nofx === 'undefined') {
            //  document.getElementById(snd_id).load();
            //  document.getElementById(snd_id).play();
            //}


            hits.push( { origin : { latitude: +datum.latitude, longitude: +datum.longitude },
                         destination : { latitude: +datum.latitude2, longitude: +datum.longitude2 } } );
            map.arc(hits, {strokeWidth: 2, strokeColor: 'green'}); //strokeColor});

            // add boom to the bubbles queue

            boom.push( { radius: 7, latitude: +datum.latitude2, longitude: +datum.longitude2,
                         fillOpacity: 0.5, attk: datum.dport} );
            map.bubbles(boom, {
                 popupTemplate: function(geo, data) {
                   return '<div class="hoverinfo">' + data.attk + '</div>';
                 }
             });
	    


             $('tr.second-level').after('<tr class="datum"><td colspan="3">' + datum.datetime + '</td><td>' + datum.org + '</td><td>' + datum.city + ', ' + iso2Name(datum.country) + '</td><td>' + datum.ip + '</td><td>' + datum.city2 + ', ' + iso2Name(datum.country2) + '</td><td>' + datum.dst_hostname + '</td><td>' + datum.dip + '</td><td>' +  datum.service + '</td><td>' + datum.dport + '</td></tr>');
      	   if (!(datum.country in data_countries)) {
      		data_countries[datum.country] = 1;
      	   } else {
      		data_countries[datum.country]++;
      	   }

      	   if (!(datum.country2 in data_countries2)) {
      		data_countries2[datum.country2] = 1;
      	   } else {
      		data_countries2[datum.country2]++;
      	   }

      	   if (!(datum.dport in data_services)) {
      		data_services[datum.dport + '__' + datum.service] = 1;
      	   } else {
      		data_services[datum.dport + '__' + datum.service]++;
      	   }



      	   var sortable = [];
      	   for (var country in data_countries2) {
      		sortable.push([country, data_countries2[country]]);
      	   }

      	   var sortedValues = sortable.sort(function(a, b) { return a[1] - b[1] });
      	   sortedValues.reverse();

      	   var html = '';
      	   var cnt = 0;
      	   for (country in sortedValues) {
                      if (cnt < 5){
      			       html += '<tr class="attacktarget_row"><td>' + sortedValues[country][1] + '</td><td><span class="flag flag-' + sortedValues[country][0].toLowerCase() + '"></span></td><td>' + iso2Name(sortedValues[country][0]) + '</td></tr>';

      		cnt++;
      		} else { break };
       	   }

      	   $('.attacktarget_row').remove();

      	   $('#attacktarget_tbody_header').after(html);






      	   var sortable = [];
      	   for (var country in data_countries) {
      		sortable.push([country, data_countries[country]]);
      	   }

      	   var sortedValues = sortable.sort(function(a, b) { return a[1] - b[1] });
      	   sortedValues.reverse();

      	   var html = '';
      	   var cnt = 0;
      	   for (country in sortedValues) {
                      if (cnt < 5){
      			       html += '<tr class="attackorigin_row"><td>' + sortedValues[country][1] + '</td><td><span class="flag flag-' + sortedValues[country][0].toLowerCase() + '"></span></td><td>' + iso2Name(sortedValues[country][0]) + '</td></tr>';

      		cnt++;
      		} else { break };
       	   }

      	   $('.attackorigin_row').remove();

      	   $('#attackorigin_tbody_header').after(html);



      	   var sortable = [];
      	   for (var service in data_services) {
      		sortable.push([service.split('__')[0], service.split('__')[1], data_services[service]]);
      	   }

      	   var sortedValues = sortable.sort(function(a, b) { return a[1] - b[1] });
      	   sortedValues.reverse();

      	   var html = '';
                 cnt = 0;
      	   for (country in sortedValues) {
      		if ( cnt < 5 ){
      		html += '<tr class="attacktype_row"><td>' + sortedValues[country][2] + '</td><td>' + sortedValues[country][0] + '</td><td>' + sortedValues[country][1] + '</td></tr>';
                      cnt++;
      		} else { break };
       	   }

      	   $('.attacktype_row').remove();

      	   $('#attacktype_tbody_header').after(html);


	   $('tr.datum:gt(10)').remove();

       // lazy-dude's responsive window
       d3.select(window).on('resize', function() { location.reload(); });




        };

        webSocket.onclose = function() {
            //try to reconnect in 5 seconds
            var interval = 500;

            wsDiscTime += 500;

            d3.select("#events-data").selectAll("tr.row").remove();
            d3.select("#events-data").append("tr").attr('class', 'row').html("<td colspan='7'><img src='img/loading.gif' style='margin-top: 6px;'/>&nbsp;<span style='display: inline-block; height: 25px; vertical-align: middle;'>Loading...</span></td>");

            if (wsDiscTime > settings.wsTimeout) {
                showMessage("We are having difficulties in the WebSocket connectivity. We will continue trying...");
                wsDiscTime = 0;
            }

            setTimeout(function(){
                console.log("websocket closed, reconnecting in " + interval + "ms");
                start(loc, psk);
            }, interval);
        };

        return webSocket;
    }
