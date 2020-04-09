const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
    var n=m[0].split("");
    var a=parseInt(n[0])+parseInt(n[1]);
    var b=[];
    var dig=0;
    var count=0;
    while(a>0){
        dig=a%10;
        b.push(dig);
        a=Math.floor(a/10);
    }
    for(var i=0;i<b.length;i++){
        for(var j=2;j<n.length;j++){
            if(b[i]==n[j]){
                count+=1;
                break;
            }
        }
    }
    if(count==b.length){
        console.log(1);
    }
    else{
        console.log(0,b,count);
    }
});
