function DisplayFactor(iNo:number):void
{
    var i:number=0;
    for(i=1;i<=iNo/2;i++)
    {
        if(iNo%i==0)
        {
            console.log(i)
        }
    }
}

DisplayFactor(20)