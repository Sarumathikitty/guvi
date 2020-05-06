const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const number=[];
inp.on('line',(data)=>{
    number.push(data);
 });
var a=[],b,c=[],d,result;
inp.on('close',()=>{
    a=number[0].split(" ");
function map()
{
 for(var i=0;i<a.length;i++)
 {  
     b=a[i]*100;
     c.push(b);
 }
 return d=c.join(" ");
 }
result=map();
console.log(result);
});
