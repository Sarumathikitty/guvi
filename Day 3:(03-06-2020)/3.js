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
function demo(check)
{
    primenumArray = primenumArray.filter((number) => {
for (var i = 2; i <= Math.sqrt(number); i++)
{
    check()
if (number % i === 0) 
return false;
}
return true
});
}
function demo2(){
    console.log("prime")
}
var primenumArray=[2]
demo(demo2)
