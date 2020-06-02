//2.4 Create a New Object in the library for a new Book called SQL
//create a function called library
function library(){
    //create a array of objects
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
  //add a new book in library object as sql
    library[2]={
        newbook:"SQL"
    }
    console.log(library);
}
library();
