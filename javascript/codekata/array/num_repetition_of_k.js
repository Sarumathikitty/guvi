const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[];
inp.on("line",(data)=>{
    n.push(data);
});
inp.on("close",()=>{
   var a=n[0].split(" ");
   var b=n[1].split(" ");
   var c=[];
   var count=0;
   for(i=0;i<a[0];i++){
        if(parseInt(a[1])==parseInt(b[i]))   {
            count=count+1;
        }
   }
   console.log(count-1);
});
