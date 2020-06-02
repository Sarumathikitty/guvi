//2.6. Print the price of Javascript book in console. 
//create a function called bookprice
function bookprice(){
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
  //print the price of the javascript book
   console.log(library[0].price);
   
}
bookprice();
    


