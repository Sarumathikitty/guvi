const filter=(arr,callback)=>{
    var s=[]
    for(var i=0;i<arr.length;i++)
    {
        if(callback(arr[i]))
        {
            s.push(arr[i])
        }
    }
    return s
}
var tofilter=(x)=>x>=5;
var a=[3,4,2,5,8,9]
console.log(filter(a,tofilter))
