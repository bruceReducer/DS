var fileString = process.argv.slice(2).toString();
var indexOfSlice = fileString.indexOf("file=");
var fileName = fileString.slice(indexOfSlice + "file=".length);

require(`./${fileName}`);
