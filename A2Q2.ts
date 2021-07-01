function Summation(...arr:number[]):number
{
    var sum:number=0;

    for(var i=0;i<arr.length;i++)
    {
        sum=sum+arr[i]
    }
 return sum;
}

var result:number=0;
result=Summation(50,40,20,40);
console.log("Summation is="+result);

