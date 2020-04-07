const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
  count=0;
  var s=data;
  for(var i=0;i<s.length;i++){
      count=count+1;
  }
  console.log(count);
});
