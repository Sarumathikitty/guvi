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


//2.2. Convert all the strings to title caps in a string array
var str=["guvi","geek"];
var capital=function(str)
{
    var s=[];
    for(i=0;i<str.length;i++)
    {
        var b=str[i];
        var c=(b[0].toUpperCase()+b.slice(1));
        s.push(c);
    }
console.log(s);
}
capital(str);


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

//2.5 Return of all the palindromes in an array
var str=["keek","nun","geek"]
var palindrome = function () {
var res=str.filter(function(p){
var b=p.split('').reverse().join('')
if(p==b)
{
return p;
}
})
console.log(res)
};
palindrome()


//2.7 Removes duplicates from array
var array=[34,56,34,78,32]
var duplicate=function(arr){
var result=[...new Set(array)];
return result;
}
console.log(duplicate(arr));

//2.8 Return an array by K times and return the rotated array
var array=[34,56,38,29,19],k=3;
var rev=function(array,k){
for(var i=0;i<k;i++)
{
var t=array.shift();
array.push(t)
}
return array
}
console.log(rev(array,k));

