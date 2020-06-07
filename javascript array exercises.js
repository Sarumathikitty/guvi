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
