#email and password login

var a=document.createElement("div");
var s=document.createTextNode("Email:");
a.appendChild(s);
document.body.appendChild(a);

var x = document.createElement("INPUT");
x.id="m";
x.setAttribute("type", "text");
a.append(x);
document.body.appendChild(a);

var b=document.createElement("div");
b.id="img";
var c=document.createTextNode("Password:");
b.appendChild(c);
document.body.appendChild(b);

var y= document.createElement("INPUT");
y.id="l";
y.setAttribute("type", "password");
b.append(y);
document.body.appendChild(b);

var z=document.createElement("button");
var d=document.createTextNode("submit");
z.append(d);
document.body.appendChild(z);


z.onclick=function(){
checkform()
};

function checkform(){

var emailvalue=document.getElementById("m").innerHTML;
var passwordvalue=document.getElementById("l").innerHTML;
}
