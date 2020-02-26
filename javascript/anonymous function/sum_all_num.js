#sum of all numbers

var arr=[1,2,3,4,5,6,7]
var sum=arr.reduce(function(accumulator,currentvalue,index){
    return accumulator+currentvalue;
 });
 console.log(sum);
