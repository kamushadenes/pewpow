from cefevent import CEFSender, CEFEvent


cs = CEFSender(host='localhost', port=10514, files=['/home/kamushadenes/Dropbox/Projects/pewpew/simulate.csv'], protocol='TCP')

cs.auto_send_log(5)
