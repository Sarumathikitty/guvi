#find area of triangle

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var n=data.split(" ");
  var a=parseInt(n[0]);
  var b=parseInt(n[1]);
  var c=(a*b)/2;
	console.log(c)
});
