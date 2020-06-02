//2.5 Find the datatype of author age in Nodejs Object. 
//create a function called typeofage
function typeofage(){
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
  //to find the datatype of author age in node js
   console.log(typeof(library[1].authordetails.age));
}
typeofage();
    


