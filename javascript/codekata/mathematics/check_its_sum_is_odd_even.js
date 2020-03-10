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
  var b=parseInt(a[0]);
  var c=parseInt(a[1]);
  var s=b+c;
  if(s%2==0)
  {
    console.log("even")
  }
  else
  {
    console.log("odd")
  }
});
