//Print the total activities of all cats
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
//create function called catsacitivity
function catsactivity(){
   var act1= cat.catFriends[0].activities;
   var act2= cat.catFriends[1].activities;
   var act3=cat.activities;
//print total cats activity
console.log(act1+act2+act3);
}
catsactivity();
