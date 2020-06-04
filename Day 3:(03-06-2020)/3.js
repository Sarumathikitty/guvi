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
