const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const number=[];
inp.on('line',(data)=>{
    number.push(data);
 });
var a=[],result,count=0;
inp.on('close',()=>{
    a=number[0].split(" ");
function findIndex()
{
 for(var i=0;i<a.length;i++)
 {  
     if(a[i]>12)
  {
  var index=i;
  count=count+1;
}
if(count==1)
{
   var answer=index;
}
}
 return answer;
 }
result=findIndex();
console.log(result);
});
