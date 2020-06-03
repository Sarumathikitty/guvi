//1.4 Display the count of all countries sharing their border with the country name in
//console.

var request=new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.onload=function(){ 
   var jsondata=JSON.parse(this.response); 
   for(var i=0; i<jsondata.length;i++)
{ 
   console.log(jsondata[i].name+" shares its border with " +jsondata[i].borders.length +" countries that includes "+jsondata[i].borders)
 }

}

request.send();
