#factorial of number

const readline = require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  var ans=1;
  for(var i=2;i<=data;i++)
  {
    ans=ans*i;
  } 
  console.log(ans);
});
