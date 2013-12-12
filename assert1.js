
var read=require("./read");
var title,price,status;
var dell;
 var pr={};
 pr["www.snapdeal.com"]="span#selling-price-id";
 pr["www.flipkart.com"]="span.fk-font-verybig.pprice.fk-bold";
 pr["www.amazon.in"]="b.priceLarge";

 var st={};
 st["www.snapdeal.com"]="span#inventory-attr-msg.inventory-text";
 st["www.flipkart.com"]="div#fk-stock-info-id.stock-status.instock";
 st["www.amazon.in"]="span.availGreen";


function check($,content,i){
  if (content) {
    $("h1").each(function(i, e) {
  title=$(e).text();
      });
    $(pr[i]).each(function(i, e) {
      price=$(e).text();
      });
    $(st[i]).each(function(i, e) {
status=$(e).text();
      });
      dell={
"title":title.trim(),
"price":price.trim(),
"status":status.trim(),};
    console.log("done");
    console.log(dell);
    return dell;
  }
  else console.log("error");  
}

this.check=check;
//read.ch(dell)

