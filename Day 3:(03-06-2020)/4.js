//4 Arrow function 
//4.1 odd numbers in a array
var number=[34,12,5,6,3,8]
var odd =()=> {
  var odd=number.filter(function(a){
      return a%2!==0
  })
console.log(odd)
};
odd()

//4.2. Convert all the strings to title caps in a string array
var str=["guvi","geek"];
var capital=()=>{
    var cap=str.map(function(str)
    {
        var c=(str[0].toUpperCase()+str.slice(1));
        return c;
});
console.log(cap);
}
capital();

//4.3. Sum of all numbers in an array
add=function(arr)
{
return arr.reduce((a,b)=>a+b,0);
};
var arr=[38,56,78,89];
var sum=add(arr);
//print sum of array
console.log(sum)


//4.4. Return all the prime numbers in an array
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
