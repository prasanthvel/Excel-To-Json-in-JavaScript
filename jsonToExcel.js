var fs = require("fs");
var json2xls = require('json2xls');

var JSON_FILE_PATH = "jsonToWrite.json";
var EXCEL_FILE_PATH = "sheetToWrite.xlsx";

var data = fs.readFileSync(JSON_FILE_PATH).toString();
//console.log(data);
content = JSON.parse(data);
var xls = json2xls(content);

fs.writeFileSync(EXCEL_FILE_PATH, xls, 'binary');
console.log("File has written");