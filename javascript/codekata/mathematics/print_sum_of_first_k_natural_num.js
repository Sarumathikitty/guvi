const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {
  var a=userInput[0];
  var sum=0;
  for(i=1;i<=a;i++)
  {
    sum=sum+i;
  }
console.log(sum);
});
