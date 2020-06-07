//1.Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
function chunk(arr, count) {
  var result = []
  input = arr.slice(0)
  while (a[0]) {
    result.push(a.splice(0, count))
  }
  return result
}
var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
var b=chunk(a,2);
console.log(b);


//2.Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
var array = [ 1, 2, 3, undefined, 0, null ];
array.forEach( function(val, i, arr){
    if(val===undefined || val===null || val===0)
    {
        arr.splice(i,1)        
    }; 
});
console.log(array );

//3.Creates a new array concatenating and flattens array a single level deep. with any additional arrays and/or values.
function flat(array) {
  return array.reduce((acc, item) => {
    return acc.concat(item);
  }, []);
}
let array = [[1, 2], 3, [4, 5]];
flat(array); 

//4.Creates a slice of array with n elements dropped from the beginning.
function dropRight(array)
{
    var arr=array.slice(1,3);
    console.log(arr);
}
dropRight([1, 2, 3]) 

//5 - dropRight
//Creates a slice of array with n elements dropped from the end.
function dropRight(array,n)
{
    var arr=array.slice(n);
    console.log(arr);
}
dropRight([1, 2, 3],5)

//6 - dropWhile
//Creates a slice of array excluding elements dropped from the end
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};
dropWhile([1, 2, 3, 4], n => n >= 3);

//7.This method is like Array.prototype.findIndex except that it iterates over elements of collection from right to left.
var arr = [1,2,3,4,5,6,6];
var a=arr.lastIndexOf('4');
console.log(a);

//8.Recursively flattens array.
const arr = [[1,2],[3,[4,[5]]]];
const flattened = arr.flattenDeep();
console.log(flattened);


//10 - fromPairs
//this method returns an object composed from key-value pairs
let scores = [
  ['a', 1], ['b', 2]
]
let obj = Object.fromEntries(scores);
console.log(obj);
