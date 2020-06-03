//Parsing a list and transform the first and last elements of it:
var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
    var newObject={};
    //getting key as GUVI
    var key=arr[0];
    //getting value as "a geek"
    var value=arr[arr.length-1];
    
    newObject[key]=value;
    return newObject;
  
}
console.log(transformFirstAndLast(arr));
