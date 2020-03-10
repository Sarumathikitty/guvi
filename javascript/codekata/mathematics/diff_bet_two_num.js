const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {
  var a=userInput[0].split(" ");
  var k=parseInt(a[0]);
  var n=parseInt(a[1]);
  if(k>n)
  {
      console.log(k-n);
  }
  else
  {
	console.log(n-k);
  }
});

