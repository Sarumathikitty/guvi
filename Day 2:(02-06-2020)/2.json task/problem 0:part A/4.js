//Print the catFriends names.
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
function catfriendsname(){
   var a= cat.catFriends[0].name;
   var b= cat.catFriends[1].name;
//print catfriends name
console.log(a,b);
}
catfriendsname();
