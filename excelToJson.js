var XLSX = require('xlsx');
var fs = require('fs');

var JSON_FILE_PATH = "excelOutput.json";
var EXCEL_FILE_PATH = "multpileSheet.xlsx";

var workbook = XLSX.readFile(EXCEL_FILE_PATH);
var sheetNames = workbook.SheetNames;


var file = fs.statSync(JSON_FILE_PATH);
if(file.size > 0) {
	fs.writeFile(JSON_FILE_PATH,''); // to delete the old data in json file
}
	
for(var i = 0; i<sheetNames.length; i++) {
	//console.log(sheetNames[i]);
	name = sheetNames[i];
	var sheet = workbook.Sheets[name];
	//fs.appendFile(JSON_FILE_PATH, sheet, 'utf8'); // to write sheet Name in file
	fs.appendFile(JSON_FILE_PATH, "[", 'utf8');
	sheet = XLSX.utils.sheet_to_json(sheet);
	var sheetNames = workbook.SheetNames;
	var sum = 0;
	var sep = "";
	for (var cell in sheet) {
		//console.log(sheet[cell]);
		data = sheet[cell];
		const content = JSON.stringify(data);
		fs.appendFile(JSON_FILE_PATH, sep+JSON.stringify(data), "utf8");
		if(!sep)
			sep = ",\n";
		//fs.appendFile(JSON_FILE_PATH, content+",", 'utf8');
		sum += 1;
	}
	fs.appendFile(JSON_FILE_PATH, "]", 'utf8');
	console.log(sum+" Rows readed from sheet "+name);
	//console.log(sum);
}
//console.log("File Saved!!")