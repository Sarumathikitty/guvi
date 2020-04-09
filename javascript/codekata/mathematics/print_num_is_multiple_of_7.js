const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
  var N=parseInt(data);
  if(N%7==0)
  {
   console.log("yes");
  }
  else
  {
    console.log("no");
  }
});
