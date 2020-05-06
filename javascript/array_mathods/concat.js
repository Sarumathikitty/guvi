const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const number=[];
inp.on('line',(data)=>{
    number.push(data);
 });
var r=[],d,b=[' '];
inp.on('close',()=>{
    r=number[0].split(" ");
    var a=r[0],c=r[1];
function concat()
{
 d=(a+b+c);
 return d;
 }
result=concat();
console.log(result);
});
