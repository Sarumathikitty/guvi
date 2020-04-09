const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
  var A=data.split(" ");
  var B=parseInt(A[0]);
  var C=parseInt(A[1]);
  var d=parseInt(A[2]);
  var f=B*C;
  console.log(f%d);
});
