//2. Print the dated of my accidents
//create a object called mycar
var myCar = {
 make: 'Bugatti',
 model: 'Bugatti La Voiture Noire',
 year: 2019,
 accidents: [
 {
 date: '3/15/2019',
 damage_points: '5000',
 atFaultForAccident: true
 },
 {
 date: '7/4/2022',
 damage_points: '2200',
 atFaultForAccident: true
 },
 {
 date: '6/22/2021',
 damage_points: '7900',
 atFaultForAccident: true
 }
 ]
}
//create a function change
function change(){
    //loop for iterate accidents array
    for(var i=0;i<myCar.accidents.length;i++)
    {
        //change true to false
    myCar.accidents[i].atFaultForAccident="false";
    }
    console.log(myCar);
}
change();
