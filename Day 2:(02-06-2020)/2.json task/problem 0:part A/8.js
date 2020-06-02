//Update the fur color of bar
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
//create function called update
function update(){
    cat.catFriends[0].furcolor="blue";
//print updated color
console.log(cat);
}
update();
