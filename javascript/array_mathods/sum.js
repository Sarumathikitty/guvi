const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const number=[];
inp.on('line',(data)=>{
    number.push(data);
 });
var a=[],result,sum=0;
inp.on('close',()=>{
    a=number[0].split(" ");
function addition()
{
 for(var i=0;i<a.length;i++)
 {  
     sum=sum+parseInt(a[i]);
 }
 return sum;
 }
result=addition();
console.log(result);
});
