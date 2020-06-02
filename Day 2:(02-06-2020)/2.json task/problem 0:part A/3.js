//List all the activities of Fluffyy’s catFriends.
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
//create function called activities
function activities(){
   var a= cat.catFriends[0].activities;
   var b= cat.catFriends[1].activities
//print activities of catfriends
console.log(a,b);
}
activities();
