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



//2.3Sum of all numbers in an array
//create a function
add=function(arr)
{
return arr.reduce((a,b)=>a+b,0);
};
var arr=[38,56,78,89];
var sum=add(arr);
//print sum of array
console.log(sum)


// 2.4. Return all the prime numbers in an array
//create a function
var primenumArray = [2, 3, 4, 5, 6, 7, 8, 9, 10,  20]
var prime=function(){
primenumArray = primenumArray.filter((number) => {
for (var i = 2; i <= Math.sqrt(number); i++) {
if (number % i === 0) return false;
}
return true;
});
//print prime numbers
 console.log(primenumArray);
}
prime()

