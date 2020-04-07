const readline = require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  var f=data;
  var a=f.split(" "); 
  var b=a[0];
  var c=a[1];
  if(b<c)
  {
    console.log(b);
  }
  else
  {
    console.log(c);
  }
});
