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
  var b=userInput[1].split(" ");
  var c=b[0];
  var d=b[1];
  if(a>c && a<d)
  {
    console.log("yes")
  }
  else
  {
    console.log("no")
  }
});
