//1.3 Extract and print all the country name with alpha3Code and population in console
//create a variable request
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.onload=function(){
 
   var jsondata=JSON.parse(this.response); 
   for(var i in jsondata)
{ 
   console.log(jsondata[i].name,":",jsondata[i].alpha3Code,"and population is",jsondata[i].population); 

}
}
request.send();
