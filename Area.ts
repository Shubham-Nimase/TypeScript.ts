function Area(radius:number,PI?):Number
{
    var ans:number;
    if (PI==undefined)
    {
        PI=3.14;
    }
    ans=radius*radius*PI;
    return ans;
}
var Result:Number;
Result=Area(10)
console.log("Area of circle is="+Result)
