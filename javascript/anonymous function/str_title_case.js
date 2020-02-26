#convert string into titlecase

var a=['saru','kowsi','subha'];
var cap=a.map(function(item){return
item[0].toUpperCase()+item.substr(1).toLowerCase()});
console.log(cap);
