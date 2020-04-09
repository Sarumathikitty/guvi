const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
  var a=parseInt(data);
  if(a%11==0)
  {
    console.log("YES")
  }
  else
  {
    console.log("no");
  }
});
