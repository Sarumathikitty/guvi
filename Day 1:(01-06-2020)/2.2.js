//Insert a new key called email and assign a value email1@gmail.com and
//email2@gmail.com respectively in both authorDetails object;


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
    //create a function called add
function add(){
    //add the"email1@gmail.com" on both authordetails
      library[0]["authordetails"]["email"]="email1@gmail.com";
       library[1]["authordetails"]["email"]="email1@gmail.com";
    //lets print the updated authordetails
   console.log(library[0].authordetails)
     console.log(library[1].authordetails)
   
}
add();
