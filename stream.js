var fs = require("fs");

var data = 'hey';

var readStream = fs.createReadStream("input.txt");

var writerStream = fs.createWriteStream('output.txt');

readStream.pipe(writerStream);

console.log("Program ended!");