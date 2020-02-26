#sum of odd numbers in array using reduce method

var arr=[1,2,3,4,5]
var sum=arr.reduce(function(accumulator,currentvalue,index){
if(currentvalue%2!=0){
   return accumulator+current};
   return accumulator
 });
 console.log(sum);
