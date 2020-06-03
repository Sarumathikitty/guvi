//programs in anonymous function
//2.1. Print odd numbers in an array
//create empty array
a=[]
var myArray=function(odd)
{
        for(var i=1; i<=10; i++){
            //to check odd condition
            if(i%2 !=0)
            {
              a.push(i);  
            }
    
        }
        console.log(a)
}
myArray(10);
