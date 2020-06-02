//Write a function called “printAllValues” which returns an newArray of all the input object’s values.

var obj = {name : "RajiniKanth", age : 33, hasPets : "false"};
function printAllValues() {
for(var i in obj)
{
    var objkey=i;
    var objvalue=obj[i]
    console.log(objvalue)
}
}
printAllValues();
