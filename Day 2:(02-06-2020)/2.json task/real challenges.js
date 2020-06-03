//problem 4
//Parsing a list and transform the first and last elements of it:
var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
    var newObject={};
    //getting key as GUVI
    var key=arr[0];
    //getting value as "a geek"
    var value=arr[arr.length-1];
    
    newObject[key]=value;
    return newObject;
  
}
console.log(transformFirstAndLast(arr));

//problem 5
//Parsing a list of lists and convert into a JSON object:
var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 //iterate and convert to json
 for(var i=0;i<arr.length;i++)
 {
     var value=arr[i];
     var j=0
    newObject[value[j]]=value[j+1]   
     
 }
 
 return newObject;
}
console.log(fromListToObject(arr))



//Problem 6 
//Parsing a list of lists and convert into a JSON object:
var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]],
[["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]
];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 var newObject={}
 //loop to iterate and tranform the array of object
  for(var i=0;i<arr.length;i++)
  {
      var first=arr[i]
            for(var j=0;j<first.length;j++)
      {
          var k=0;
          var inside=first[j];
                  
          newObject[inside[k]]=inside[k+1];
      }

      tranformEmployeeList.push(newObject);     
        
  } 
 return tranformEmployeeList;
}
console.log(transformEmployeeData(arr));




//Problem 7 
   //Parsing two JSON objects and Compare:
   var expected = {foo: 5, bar: 6};
   var actual = {foo: 6, bar: 5}
   function assertObjectsEqual(actual, expected, testName){
   //actual parsing string
  var act=JSON.stringify(actual);
  var expect=JSON.stringify(expected);
  var testCase=testName;
  //Compare the two string
  if(act===expect)
   {
     console.log("Passed");
   }
    else
    {
     console.log("FAILED [my test] Expected"+expect+"but got"+act)
    }
    }
     assertObjectsEqual(actual,expected,"case1")


//problem 8
     //Parsing JSON objects and Compare:
     var securityQuestions = [
        {
        question: "What was your first pet’s name?",
        expectedAnswer: "FlufferNutter"
        },
        {
        question: "What was the model year of your first car?",
        expectedAnswer: "1985"
        },
        {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
        }
       ]
       function chksecurityQuestions(securityQuestions,ques,ans) {
           var question=ques;
           var answer=ans;
           var newobj={}
           //creation of objects
           newobj["question"]=question;
           newobj["expectedAnswer"]=answer;
           //checking valid or not valid
        
           for(var i=0;i<securityQuestions.length;i++)
           {
               //before checking convert to string
               if(JSON.stringify(securityQuestions[i])==JSON.stringify(newobj))
               {
                   return true;
               }
               else
               {
                   return false;
               }
           }
       }
       var status=chksecurityQuestions(securityQuestions,"What was your first pet’s name?","FlufferNutter");
       console.log(status);




   //Problem 9:
    //Write a function to return the list of characters below 20 age
    var students = [
    {
    name:"Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
    {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
    {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
    {name:"Munnabhai",age: 40},{name: "Sher Khan",age: 20},
    {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
    {name: "Devdas",age: 56} 
    ];
    //functions to return minor
    function returnMinors(arr)
     {
       var arrayli=[];
       for(var i=0;i<students.length;i++)
       {
           //checking the each person name below 20
           if(students[i]["age"]>20)
           {
               arrayli.push(students[i]["name"])
           }
       }
       return arrayli;
   }
   console.log(returnMinors(students));
  


