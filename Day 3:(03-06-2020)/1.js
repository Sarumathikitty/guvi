//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.

var num =10;
//addfive function
function addFive(num) {   
       return num+5;
   }
var result = addFive(num)
console.log(result);

//Write a function called “getOpposite”.
//Given a number, return its opposite
var num = 5;
function getOpposite(num) {
        return num*-1;    
}
var result = getOpposite(num)
console.log(result)

//Fill in your code that takes an number minutes and converts ittoseconds.
var min = 5;
function toSeconds(min) {
    return min*60
}
var secs = toSeconds(min)
console.log(secs);

//Create a function that takes a string and returns it as an integer.
var mystr="5";
function toInteger(mystr) {
    return parseInt(mystr)
}
var myint = toInteger(mystr)
console.log(myint);

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = 5;
function nextNumber(myint) {
    return myint+1;
}
var myNextint = nextNumber(myint)
console.log(myNextint)


//Create a function that takes an array and returns the first element.

var arr = [-500,0,50];
function getFirstElement(arr) {
    return arr.shift()
}
var data = getFirstElement(arr)
console.log(data);


//Write a function that converts hours into seconds.
var arr = [1, 2, 3];
function hourToSeconds(arr) {
    var sec=arr.map(function(s){
        console.log(s*60*60)
    })
}
hourToSeconds(arr)

//Create a function that takes height and width and finds the perimeter of a rectangle.
function findPerimeter(num1,num2) {
    return 2*(num1+num2)
}
var p = findPerimeter(6,7)
console.log(p)

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1,num2) {
    var a=num1+num2;
    if(a>100)
    {
        return "false"
    }
    else
    {
        return "true"
    }
}
var res = lessThan100(22,15)
console.log(res);

//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value
function remainder(num1,num2) {
    var rem=num1%num2;
    return rem    
}
var res = remainder(1,3)
console.log(res);

//Old macdonald had a farm:
//MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//turkey = 2 legs
//horse = 4 legs
//pigs = 4 legs
//The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function CountAnimals(tur,horse,pigs) {
    var ani1=tur*2;
    var ani2=horse*4;
    var ani3=pigs*4;
    var res=(ani1+ani2+ani3);
    return res
}
var legs = CountAnimals(2,3,5)
console.log(legs)


//Frames Per Second
//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
//Examples
//frames(1, 1) ➞ 60
function frames(num1,num2) {
    var a=num1*num2;
    var b=a*60
    return b
}
var fps = frames(1,2)
console.log(fps);


//Check if an Integer is Divisible By Five
//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(num1) {
    if(num1%5==0)
    {
        return "true"
    }
    else
    {
        return "false"
    }
}
var divisible = divisibleByFive(5);
console.log(divisible)

//Write a function called “isEven”.
//Given a number, “isEven” returns whether it is even.

function isEven(num){
 if(num%2==0)
 {
     return "true"
 }
 else
 {
     return "false"
 }
}
var even = isEven(5)
console.log(even)

//Write a function called “areBothOdd”.
//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2){
 if(num1%2==0 && num2%2==0)
 {
     return "false"
 }
 else
 {
     return "true"
 }
}
var odd=areBothOdd(5,3)
console.log(odd)

//Write a function called “getFullName”.
//Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

function getFullName(firstName, lastName){
    return firstName+" "+lastName
}
var res=getFullName("guvi","geek")
console.log(res);


//Write a function called “getLengthOfWord”.
//Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthOfWord(word1){
  if(typeof(word1)=="string")
  {
      return word1.length;
  }
  
}
console.log(getLengthOfWord("guvi"))


//Write a function called “isSameLength”.
//Given two words, “isSameLength” returns whether the given words have the same length.
function isSameLength(word1, word2){
    var a=word1.length
    var b=word2.length
 if(a==b)
 {
     return "true"
 }
 else
 {
     return "false"
 }
}
console.log(isSameLength("guvi","GEEK"))

//Create a function to calculate the distance between two points defined by their x, y coordinates
console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
    var x=x2-x1; 
    var xaxis=Math.pow(x,2)
    var y=y2-y1;
    var yaxis=Math.pow(y,2)
    var z=xaxis+yaxis
    var res=Math.sqrt(z);
    return res;
    
}


//Write a function called “getNthElement”.
//Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
function getNthElement(array,n){
   return array[n];
}
var getNthElement=([1,3,5],1)
console.log(getNthElement)


//Write a function called “getLastElement”.
//Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
function getLastElement(array){
 if(array.length!==0)
 {
     return array[array.length-1]
 }
 else{
     return "-1"
 }
}
console.log(getLastElement([1,2,3,4]))


//Write a function called “getProperty”.
//Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
//Input:getProperty(obj,’mykey’);var obj = { mykey: “value” };
//output:value;
var obj = {
 mykey: "value"
};
function getProperty(obj, key) {      
      console.log(obj[key]) 
}
getProperty(obj,"mykey")

//Write a function called “addProperty”.
//Given an object, and a key, “addProperty” sets a new property on the given object with a value of true.

var obj = {
 mykey: "value"
};
function addProperty(obj, key){
     obj.key="guvi";
     console.log(obj)
}
addProperty(obj,"geek")

//Write a function called “removeProperty”.
//Given an object and a key, “removeProperty” removes the given key from the given object.
var obj = {
 mykey: "value"
};
function removeProperty(obj, key){

         delete obj[key]
         console.log(obj)
}
removeProperty(obj,"name")


//Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar)
{
    var a=[]
 var array=ar.map(function(p){
     if(p>0)
     {
         a.push(p);
     }
 })
 return a;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);


//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).

function powersOfTwo(n){
  
 var res=[];
 for(var i=0;i<n;i++) {    
     res.push(Math.pow(2,i))
 }
 return res;
}
console.log(powersOfTwo(1))

//Find the maximum number in an array of numbers
function findMax(ar)
{
   return Math.max(...ar);
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log(max)

//Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   var a= s.split("").reverse().join("");
   return a
}


//Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));

function sumCSV(s)
{   
    var sum=0;
    var n=s.toString().split(",")
    var arr=n.map(function(a){       
        sum+=parseInt(a)
    })
    return sum;  
}



