#round and print odd or even

const readline = require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
var a=Math.round(data)  
if(a==0)
{ 
  console.log("zero");
}
else if(a%2==0)
{
  console.log("Even")
} 
else
{
  console.log("odd")
}  
});
