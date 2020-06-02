//2.9. Print the count value of Person 2 in console. 
//to create function called countvalue
function countvalue(){
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
 //print the countvalue of person2
 console.log(library[0].readers[1].count);
  
   
}
countvalue();
