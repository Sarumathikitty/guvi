//1. Convert specifications given below in image to Javascript Object;

//create new object technical specifications
function newobj(){
var technical specifications={
dimensions:{
"overall length":3500,
"overall width":1600,
"overall height":1590,
"wheelbase":2360,
"track width":{
"front":1405,
"rear":1400
},
"minimum turning radius":4.5,
"minimum ground clearence":170
},
"capacities":{
"seating capacity":5,
"fuel tank capacity":35,
},
"engines":{
"type":"kb series",
"number of cylinders":3,
"number of valves":12,
"capacity":998,
"bore x store":73.0*79.5,
"compression ratio":10:1,
"maximum power":[67/6,200],
"maximum torque":[90/3,500],
"fuel distribution":multipoint injection
},
"transimission":{
"type":"5-speed mt"
},
"chasis":{
"steering":["rack","pinion","power assistance"],
"brakes":{
"front":"ventilated discs",
"rear":"drums"
},
"suspension":{
"front":["macpherson strut","coil spring"],
"rear":["isolated trailing link","coil spring"]
},
"shock absorbers":"gas filled",
"tyre(tubeless)":155/80r13
},
"weights":{
"kerb weight(min,with full options)":860-880,
"cross vehicle weight":1320
}
}
  console.log(technical specification.dimensions['overall length']);
}
newobj();






