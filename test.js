var par=require("./webscrap");
var url = require('url');
var i;
//var a = url.parse("http://www.snapdeal.com/product/dell-inspiron-15-3521-laptop/1792879436?pos=1;301");

var stdin = process.openStdin();
stdin.on('data', function(chunk) { 
	console.log("Got chunk: " + chunk); 
	var a=url.parse(chunk.toString()); 
	//console.log(a);
    //if(a.host=="www.snapdeal.com"){i=0;}
    //else{i=1;}
	par.check(a,a.host);
	//process.exit();
});
