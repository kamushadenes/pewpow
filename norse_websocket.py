from gevent import monkey; monkey.patch_all()
from ws4py.server.geventserver import WSGIServer
from ws4py.server.wsgiutils import WebSocketWSGIApplication
from ws4py.websocket import WebSocket
import urllib.request, urllib.error, urllib.parse
import json
from time import sleep
from threading import Thread, Lock
import traceback



lock = Lock()

clients = set()
started = False

class NorseWS(WebSocket):

    def received_message(self, message):
        # echo message back to client
        pass

    def opened(self):
        clients.add(self)
        global started
        if not started:
            t = Thread(target=self.get_messages)
            t.daemon = True
            t.start()
            started = True

    def closed(self, code, reason=None):
        clients.remove(self)


    def get_messages(self):
        with lock:
            while True:
                try:
                    req = urllib.request.Request("http://localhost:9999")
                    opener = urllib.request.build_opener()
                    f = opener.open(req)
                    nodes = json.loads(f.read().decode())
                    for node in nodes:
                        for client in clients:
                            client.send(node, False)
                except:
                    traceback.print_exc()
                sleep(1)

server = WSGIServer(('0.0.0.0', 8080), WebSocketWSGIApplication(handler_cls=NorseWS))
server.serve_forever()
