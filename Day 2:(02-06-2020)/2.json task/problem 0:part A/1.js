//Add height and weight to Fluffy
//create a object called cat
var cat = {
 name: "Fluffy",
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}
//create function called add
function add(){
    cat[3]={"height":"30"},
    cat[4]={"weight":"40kg"}
//print height and weight of fluffy
console.log(cat);
}
add();
