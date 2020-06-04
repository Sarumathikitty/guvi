//3. Write a callback which is called
//3.1. if the give number is even

function demo(a,check)
{
    if(a%2==0)
    {
        check()
        return true;
    }
}
function demo2(){
    console.log("even")
}
demo(2,demo2)

//3.2. if the given number is prime
function testPrime(num){
if(num >= 2){
for(var i = 2; i < num; i++){
if(num % i === 0){
return false;
}
}
return true;
}else{
return false;
}
}

console.log(testPrime(3));
console.log(testPrime(20));


//3.3. if the number is palindrome 
function palindrome(number,check)
{
    var  temp=number
   if(check(number)==temp)
   {
       return  "palindrome"
   }
   else
   {
       return "not palindrome"
   }
}
function checkCondition(number)
{
 var a,num,b,temp=0;
while(num>0)
{
a=num%10;
num=parseInt(num/10);
temp=temp*10+a;
}	
    return temp
		
}
var res=palindrome(123,checkCondition);
console.log(res)

