var fs = require("fs");

//Async read
fs.readFile("input.txt", function(err, data){
	if (err){
		console.log(err.stack);
	}
	console.log("Async + " +data.toString());
});

//Sync read

var data = fs.readFileSync("input.txt");
console.log("Sync + "+data.toString());

console.log("Program ended!");