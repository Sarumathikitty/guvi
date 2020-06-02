//2.8. Print how many readers for javascript in console. 
//create function called readerscount
function readerscount(){
var library=[
    {
        title:"javascript",
        price:500,
        readers:[
            {
                name:"person 1",
                count:300
            },
            {
                name:"person 2",
                count:400
            }
             
            ],
            authordetails:{
                name:"raj",
                age:40
            },
    },
    {
        title:"node js",
        price:600,
        readers:[],
         authordetails:{
                name:"raj",
                age:40
            }
    }
    
    ]
  //how many readers in javascript
  var count = 0;
  for (var i in library[0].readers) {
    count = count + 1;
    }
console.log(count);
  
   
}
readerscount();
