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
  var n=userInput[1].split(" ");
  var l=[]
  for(i=0;i<a-1;i++)
  {
      var k=n[i+1]
      var j=n[i]
      l.push(k)
      l.push(j)
      i=i+1;
  }
  if(a%2!=0)
  {
    l.push(n[a-1])  
  }
	console.log(l.join(" "));
});
