var events = require("events");
var fs = require("fs");


//File io
fs.readFile("input.txt", function(err, data){
	if(err){
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});

//event driven programming
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected(){
	console.log("COnnection Successful!");

	eventEmitter.emit("data_received");
}

eventEmitter.on("connection", connectHandler);

eventEmitter.on("data_received", function(){
	console.log("Data has been receivde");
});

eventEmitter.emit("connection");

console.log("Program has ended");