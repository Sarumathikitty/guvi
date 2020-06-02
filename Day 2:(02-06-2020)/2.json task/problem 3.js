//Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
var object = {name: 'ISRO', age: 35, role: 'Scientist'};
emparr=[];
function convertListToObject(){
    for(var i in object)
    {
        var objkey=i;
        var objvalues=object[i];
        emparr.push([objkey,objvalues]);
    }
    console.log(emparr);
}
convertListToObject();
