/*
	Title : Excel to Json Converter
	Author : Velmurugan P (Prasanthvel)
	Email : prasanthvel@gmail.com
	Last Modified : 
*/

var XLSX = require('xlsx');
var fs = require('fs');
var workbook = XLSX.readFile('fileName');
var sheetNames = workbook.SheetNames;

for(var i = 0; i<sheetNames.length; i++) {
	//console.log(sheetNames[i]);
	name = sheetNames[i]; // to get the name of the sheet from the workbook
	var sheet = workbook.Sheets[name]; 
	fs.appendFile("JsonFIle", "[", 'utf8'); // to avoid the replacing of the output use appendFile, change the JsonFIle with the fileName with extension for output
	sheet = XLSX.utils.sheet_to_json(sheet); // to convert the sheet objects to json
	var sheetNames = workbook.SheetNames;
	var sum = 0;
	for (var cell in sheet) {
	//	console.log(sheet[cell]);
		data = sheet[cell];
		const content = JSON.stringify(data);
		fs.appendFile("JsonFile", content, 'utf8');
	sum += 1;
	}
	fs.appendFile("JsonFIle", "]", 'utf8');
	console.log(sum+" Rows readed from sheet "+name);
	//console.log(sum);
}
//console.log("File Saved!!")