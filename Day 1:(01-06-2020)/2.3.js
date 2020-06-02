//2.3 Insert a new reader in the readers array for Nodejs.

//create a function  called newreader
function newreader(){
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
   //insert a new reader in a array for readers in node js
    library[1].readers={
        reader:"book"
    }
    console.log(library[1].readers);
}
newreader();








