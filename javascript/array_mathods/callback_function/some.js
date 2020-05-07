const some=(arr,callback)=>{
    for(var i=0;i<arr.length;i++)
    {
        if(callback(arr[i]))
        return true
        break
    }
    return false
}
var cond=(f)=>f>=10
var a=[15,20,25,30 ]
console.log(some(a,cond))
