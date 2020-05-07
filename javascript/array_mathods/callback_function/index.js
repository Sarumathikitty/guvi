const index=(arr,callback)=>{
    for(var i=0;i<arr.length;i++)
    {
        if(callback(arr[i]))
        {
            return i
        }
    }
    
}
var tofindindex=(x)=>x==c
var a=[1,2,3,4,5,7,6],c=3
console.log(index(a,tofindindex))
