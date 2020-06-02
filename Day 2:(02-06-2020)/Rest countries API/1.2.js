//1.2 Extract and print the all the country name with capital name in console

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.onload=function(){ 
   var jsondata=JSON.parse(this.response); 
   for(var i in jsondata)
{ 
//print countryname with capital
   console.log(jsondata[i].name,":",jsondata[i].capital);
 
}
}
request.send();
