const map=(arr,callback)=>{
    var s=[]
    for(var i=0;i<arr.length;i++)
    {
        s.push(callback(arr[i]))
    }
    return s
}
var tomap=(w)=> w*5
var a=[1,2,3,5,4,6]
console.log(map(a,tomap))
