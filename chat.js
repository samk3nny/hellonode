var net = require('net');

var chatServer = net.createServer();
  clientList = [];
  
chatServer.on('connection', function(client) {
	client.name = client.remoteAddress + ':' + client.remotePort;
	client.write('Hi ' + client.name + '!\n');
		
	clientList.push(client);
	
	client.on('data', function(data) {
		broadcast(data, client);
  })
})

function broadcast(message, client) { 			
		for(var i=0; i<clientList.length;i++) {
			if (client != clientList[i]) {
		    // write this data to all clients except the calling one
		    clientList[i].write(message);
		  }
	  }
}

chatServer.listen(9000)
