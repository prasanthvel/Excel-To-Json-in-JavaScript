/*
	Title : Json to Excel Converter
	Author : Velmurugan P (Prasanthvel)
	Email : prasanthvel@gmail.com
	Last Modified : 9/8/2017 1.01 PM
*/

var fs = require("fs");
var json2xls = require('json2xls');

var data = fs.readFileSync("test.json").toString(); // read the file and store the content
//console.log(data);
content = JSON.parse(data); // parse the file content into json
var xls = json2xls(content); 

fs.writeFileSync('Book1.xlsx', xls, 'binary');

//console.log("Excel Sheet has written");
 
