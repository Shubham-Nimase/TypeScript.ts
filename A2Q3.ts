function SecondMax(...a:number[]):number
{
    var temp:number=0;

    for(var i=0;i<a.length;i++)
    {
    for(var j=i+1;j<a.length;j++)
      {   
        if(a[i]>a[j])
        {
          temp=a[i];
          a[i]=a[j];
          a[j]=temp;
        }
      }
    }
return (a[a.length-2]);

}


var result:number=0;
result=SecondMax(100,23,89,6,29,560,45,77,32);
console.log("Second Maximum number is="+result);

