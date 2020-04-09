const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
 var a=data;
 var s='';
 for(i=a.length-1;i>=0;i--)
 {
   s+=a[i];
 }
  console.log(s);
});
