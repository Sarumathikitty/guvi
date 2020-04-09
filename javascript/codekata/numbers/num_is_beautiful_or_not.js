const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
    var a=m[1].split(" ");
    var sum=0;
    for(i=0;i<a.length;i++){
        sum+=parseInt(a[i]);
    }
    if(sum%2===0 && sum%3===0 && sum%5===0 ){
        console.log(1);
    }
    else{
        console.log(0,sum);
    }
});
