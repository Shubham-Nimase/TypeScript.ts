function maximum(...arr:number[]):number
{
    var max:number=0;
    var i:number
    for(var i=0;i<arr.length;i++)
    {    
        
       if(arr[i]>max)
       {
           max=arr[i];
       }
    }
        
    return max;
   
}
var result:number=0;
result=maximum(1,23,89,6,29,560,45,77,32);
console.log("Maximum number is="+result);

