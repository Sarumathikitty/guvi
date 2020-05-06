const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const number=[];
inp.on('line',(data)=>{
    number.push(data);
 });
var a=[],d,c=[],result,sum=0;
inp.on('close',()=>{
    a=number[0].split(" ");
function filter()
{
 for(var i=0;i<a.length;i++)
 { 
     if(a[i].length>7)
  {
    var answer=a[i];
    c.push(answer);
 }
 }
 return d=c.join(" ");
 }
result=filter();
console.log(result);
});
