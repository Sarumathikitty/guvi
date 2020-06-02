//Print the total weight of catfriends
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
//create function called catfriendsname
function catfriendsweight(){
   var a= cat.catFriends[0].weight=8;
   var b= cat.catFriends[1].weight=3;
   var c=a+b
//print catfriends total weight
console.log(c);
}
catfriendsweight();
