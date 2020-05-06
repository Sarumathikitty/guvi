const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const number=[];
inp.on('line',(data)=>{
    number.push(data);
 });
var r=[],count=0;
inp.on('close',()=>{
    r=number[0].split(" ");
function every()
{
for(var i=0;i<r.length;i++)
{
  if(r[i]<100)
  count=count+1;
}
if(count==r.length)
{
return true;
}
else
{
return false;
}
}
result=every();
console.log(result);
});
