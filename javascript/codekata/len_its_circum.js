#circumference of number

const readline = require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  circle=2*3.14159*data;
  console.log(circle.toFixed(2));
});
