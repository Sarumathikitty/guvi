//add two more activities to bar and foo
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
    cat.catFriends[0].activities[2]="fight";
    cat.catFriends[0].activities[3]="sleep";
    cat.catFriends[1].activities[2]="fight";
    cat.catFriends[1].activities[3]="sleep";
//print two more activities
console.log(cat);
}
catsactivity();
