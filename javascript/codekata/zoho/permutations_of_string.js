const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[]
inp.on("line", (data) => {
  a.push(data)
});
inp.on("close",()=>{
    var string=a[0]
    function getAllPermutations(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }
  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0,i) + string.substring(i + 1);
    var innerPermutations = getAllPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}
var r=getAllPermutations(string)
for(var i=0;i<r.length;i++)
{
    console.log(r[i])
}
})
