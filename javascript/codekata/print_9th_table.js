# write a program to print the table of 9 

const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line" ,(data)=>{
  var s="";
  for(i=1;i<=data;i++)
  {
    s+=(i*9)+" ";
  }
  console.log(s);
});  
