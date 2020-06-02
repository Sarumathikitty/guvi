//Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.

var obj={name : 'RajiniKanth', age : 25, hasPets : true}
function printAllKeys(){
    for(var i in obj)
    {
        var objkey=i;
        var objvalue=obj[i];
        console.log(objkey)
}
}

printAllKeys();
