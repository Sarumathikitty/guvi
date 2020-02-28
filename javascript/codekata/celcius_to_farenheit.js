#convert celcius into farenheit

const readline = require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
  f=((data*1.8)+32)
  console.log(f.toFixed(2));
});
