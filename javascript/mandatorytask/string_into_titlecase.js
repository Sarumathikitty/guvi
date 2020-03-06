#convert string into titlecase

var a=['saru','kowsi','subha'];
var cap=a.map(item)=>
item[0].toUpperCase()+item.substr(1).toLowerCase();
console.log(cap);
