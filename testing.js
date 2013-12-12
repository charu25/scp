var par = require("./assert1");
var assert = require("assert");
var fs = require("fs");
var cheerio = require("cheerio");
suite('Read', function(){
  var $, c;
  suite('file reading', function() {
    test('file testing', function(done){
      fs.readFile("/home/charu/nodeprog/amazon.html",'utf-8', function(err, data) {
          if(err) {throw err;}
          $ = cheerio.load(data);
          c = par.check($, data, "www.amazon.in");
          assert.deepEqual(c, { title: 'H 2000-2D49TU 15.6-inch Laptop',
          price: 'Rs. 23,000.00',status: 'Only 1 left in stock.' },console.log("matches!!"));
          done();
          //setTimeout(done,500);
      });
    });
  });
});