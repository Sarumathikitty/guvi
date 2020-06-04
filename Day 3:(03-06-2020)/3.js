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
