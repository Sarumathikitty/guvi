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
  var s=a.sort();
console.log(s[0]);
});
