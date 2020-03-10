const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var n=data;
while(data<n)
  {
    i+=1;
    data=pow(2,i);
  }
  if(data==n)
  {
    console.log("yes");
  }
  else
  {
    console.log("no");
  }
});
