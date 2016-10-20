import threading
import time
import socketserver
import json
import datetime
import pycountry
import re
import urllib.request, urllib.error, urllib.parse
import socket
import traceback
from bs4 import BeautifulSoup


lock = threading.BoundedSemaphore(10)


evt_cnt = 0

geocache = {}

class ThreadedTCPRequestHandler(socketserver.BaseRequestHandler):

    queue = []

    def is_ip_private(self,ip):

        # https://en.wikipedia.org/wiki/Private_network

        priv_lo = re.compile("^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$")
        priv_24 = re.compile("^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$")
        priv_20 = re.compile("^192\.168\.\d{1,3}.\d{1,3}$")
        priv_16 = re.compile("^172.(1[6-9]|2[0-9]|3[0-1]).[0-9]{1,3}.[0-9]{1,3}$")

        return priv_lo.match(ip) or priv_24.match(ip) or priv_20.match(ip) or priv_16.match(ip)

    def geo_freegeoip(self, ip):
        url = 'http://freegeoip.net/json/{0}'.format(ip)
        req = urllib.request.Request(url)

        try:
            page = urllib.request.urlopen(req, timeout=10).read().decode()

            return json.loads(page)
        except:
            return False

    def geo_ipaddress_iptracer(self, ip):
        url = "http://www.ip-adress.com/ip_tracer/{0}".format(ip)
        hdr  = {'User-Agent': 'Mozilla/5.0'} # ip-adress.com only accepts popular agents
        req  = urllib.request.Request(url, headers=hdr)
        try:
                page = urllib.request.urlopen(req, timeout=10).read().decode()
        except:
            return False

        soup = BeautifulSoup(page)

        isp =  soup.find('td', {'id': 'ipinfo'}).find('table').find_all('tr')[8].find('td').text.strip()
        city = soup.find('td', {'id': 'ipinfo'}).find('table').find_all('tr')[5].find('td').text.strip()

        d = {}
        d['isp'] = isp
        d['city'] = city
        return d

    def geo_telize(self, ip):
        url = 'http://www.telize.com/geoip/{0}'.format(ip)
        hdr  = {'User-Agent': 'Mozilla/5.0'}
        req  = urllib.request.Request(url, headers=hdr)
        try:
            page = urllib.request.urlopen(req, timeout=10).read().decode()
        except:
            return False

        d = json.loads(page)

        return d

    def geo_ipapi(self, ip):
        url = 'http://ip-api.com/json/{0}'.format(ip)
        hdr  = {'User-Agent': 'Mozilla/5.0'}
        req  = urllib.request.Request(url, headers=hdr)
        try:
            page = urllib.request.urlopen(req, timeout=10).read().decode()
        except:
            return False

        d = json.loads(page)

        return d

    def geo_ipjson(self, ip):
        url = 'http://ip-json.rhcloud.com/json/{0}'.format(ip)
        hdr  = {'User-Agent': 'Mozilla/5.0'}
        req  = urllib.request.Request(url, headers=hdr)
        try:
            page = urllib.request.urlopen(req, timeout=10).read().decode()
        except:
            return False

        d = json.loads(page)

        return d

    def get_geo(self, ip):
        global geocache
        try:
            return geocache[ip]
        except KeyError:
            try:
                response = self.geo_freegeoip(ip)
            except:
                response = self.geo_ipapi(ip)
                try:
                    response['country'] = response['countryCode']
                    response['latitude'] = response['lat']
                    response['longitude'] = response['lon']
                except KeyError:
                    response = self.geo_ipjson(ip)
                    try:
                        if response['error'] == '400: Bad Request':
                            raise Exception()
                        else:
                            response['country'] = response['country_code']
                            self.geocache[ip] = response
                    except:
                        try:
                            response = self.geo_telize(ip)
                            if not response:
                                raise Exception('Telize came back empty')
                        except:
                            response = self.geo_ipaddress_iptracer(ip)
            geocache[ip] = response
            return response


    def process(self, data):
        #with lock:
        if True:
            cef = data.decode('utf-8').split('|')

            obj = {}


            try:
                obj['dport'] = int(re.findall('tpt=(.+?)(?:\s[^=]+|\s*$)', cef[7].strip())[0])
            except IndexError:
                try:
                    obj['dport'] = int(re.findall('dpt=(.+?)(?:\s[^=]+|\s*$)', cef[7].strip())[0])
                except:
                    try:
                        obj['dport'] = int(re.findall('spt=(.+?)(?:\s[^=]+|\s*$)', cef[7].strip())[0])
                    except:
                        obj['dport'] = 0

                '''
                {"type":"NTP","port":123,"color":"#17BECF","dest":{"lat":"52.378","lon":"4.906","country":"NLD"},"src":{"lat":"49.828","lon":"24.009","country":"UKR","ip":"18.237.57.93"}, "timestamp":"June 9, 2015, 2:33 pm"}
                '''
            try:
                obj['dst_hostname'] = re.findall('dhost=(.+?)(?:\s[^=]+|\s*$)', cef[7].strip())[0]
            except:
                obj['dst_hostname'] = '-'

            try:
                obj['service'] = socket.getservbyport(int(obj['dport']))
            except:
                obj['service'] = 'Unknown'

            try:
                obj['ip'] = re.findall('src=(.+?)(?:\s[^=]+|\s*$)', cef[7].strip())[0]
            except IndexError:
                obj['ip'] = 'None'

            try:
                obj['dip'] = re.findall('dst=(.+?)(?:\s[^=]+|\s*$)', cef[7].strip())[0]
            except IndexError:
                obj['dip'] = 'None'

            if self.is_ip_private(obj['ip']) or self.is_ip_private(obj['dip']):
                return


            try:
                obj['country'] = pycountry.countries.get(alpha2=re.findall('sourceGeoCountryCode=(.+?)(?:\s[^=]+|\s*$)', cef[7].strip())[0]).alpha2
            except IndexError:
                obj['country'] = 'None'

            try:
                obj['country_a3'] = pycountry.countries.get(alpha2=re.findall('sourceGeoCountryCode=(.+?)(?:\s[^=]+|\s*$)', cef[7].strip())[0]).alpha3
            except IndexError:
                obj['country_a3'] = 'None'

            try:
                obj['country2'] = pycountry.countries.get(alpha2=re.findall('destinationGeoCountryCode=(.+?)(?:\s[^=]+|\s*$)', cef[7].strip())[0]).alpha2
            except IndexError:
                obj['country2'] = 'None'



    
            if obj['ip'] != 'None':
                geo = self.get_geo(obj['ip'])
                dgeo = self.get_geo(obj['dip'])
            else:
                return


            try:
                obj['latitude'] = float(re.findall('slat=(.+?)(?:\s[^=]+|\s*$)', cef[7].strip())[0])
            except:
                try:
                    obj['latitude'] = geo['latitude']
                except:
                    obj['latitude'] = 0.0

            try:
                obj['longitude'] = float(re.findall('slong=(.+?)(?:\s[^=]+|\s*$)', cef[7].strip())[0])
            except:
                try:
                    obj['longitude'] = geo['longitude']
                except:
                    obj['longitude'] = 0.0

            try:
                obj['latitude2'] = float(re.findall('dlat=(.+?)(?:\s[^=]+|\s*$)', cef[7].strip())[0])
            except:
                try:
                    obj['latitude2'] = dgeo['latitude']
                except:
                    obj['latitude2'] = 0.0

            try:
                obj['longitude2'] = float(re.findall('dlong=(.+?)(?:\s[^=]+|\s*$)', cef[7].strip())[0])
            except:
                try:
                    obj['longitude2'] = dgeo['longitude']
                except:
                    obj['longitude2'] = 0.0

            #if obj['latitude'] == 0.0 or obj['longitude'] == 0.0 or obj['latitude2'] == 0.0 or obj['longitude2'] == 0.0:
            #    return

            # Try to fill missing info
            if obj['country'] == 'None':
                try:
                    obj['country'] = geo['country']
                except:
                    obj['country'] = '-'

            if obj['country2'] == 'None':
                try:
                    obj['country2'] = dgeo['country']
                except:
                    obj['country'] = '-'


            try:
                obj['org'] = geo['isp']
            except:
                obj['org'] = 'Unknown'

            try:
                obj['city'] = geo['city']
            except:
                try:
                    obj['city'] = re.findall('sourceGeoRegionCode=(.+?)(?:\s[^=]+|\s*$)', cef[7].strip())[0]
                except:
                    obj['city'] = 'Unknown'

            try:
                obj['city2'] = dgeo['city']
            except:
                try:
                    obj['city2'] = re.findall('destinationGeoRegionCode=(.+?)(?:\s[^=]+|\s*$)', cef[7].strip())[0]
                except:
                    obj['city2'] = 'Unknown'


            self.queue.append(json.dumps(obj))


    def handle(self):
       while True:
        try:
            self.data = self.request.recv(1024)


            if not self.data:
                break

            self.data = self.data.strip()


            if self.data.startswith(b'GET'):
                self.request.send(b'HTTP/1.0 200 OK\n')
                self.request.send(b'Server: BaseHTTP/0.3 Python/2.6.6\n')
                self.request.send(b'Content-type: application/json\n')
                self.request.send(b'\n')
                self.request.send(json.dumps(self.queue).encode())
                del self.queue[:]
                break
            else:
                with lock:
                    t = threading.Thread(target=self.process, args=(self.data,))
                    t.start()
        except Exception as e:
            traceback.print_exc()
            continue




class ThreadedTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True

if __name__ == "__main__":

    HOST = '0.0.0.0'
    PORT_A = 10514
    PORT_B = 9999

    server_A = ThreadedTCPServer((HOST, PORT_A), ThreadedTCPRequestHandler)
    server_B = ThreadedTCPServer((HOST, PORT_B), ThreadedTCPRequestHandler)

    server_A.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server_B.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

    #server_A.socket.settimeout(0.0)
    #server_B.socket.settimeout(0.0)

    server_A_thread = threading.Thread(target=server_A.serve_forever)
    server_B_thread = threading.Thread(target=server_B.serve_forever)

    server_A_thread.daemon = True
    server_B_thread.daemon = True

    server_A_thread.start()
    print(('[*] Listener spanwed: CEF/Syslog at %s:%s' % (HOST,PORT_A)))
    server_B_thread.start()
    print(('[*] Listener spanwed: JSON/HTTP at %s:%s' % (HOST,PORT_B)))

    while 1:
        time.sleep(1)
