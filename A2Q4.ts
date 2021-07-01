function Armstrong(ino)
{

    var rem:number=0;
    var sum:number=0;

    var flag=ino;
  while (flag>0) 
  {
      rem=flag%10;
      flag=flag/10;
     sum=sum+rem*rem*rem;
      
  }

  if(sum===flag)
  {
      console.log("It is Armstrong number");
  }   
  else
  {
      console.log("It is not Armstrong number");
  }
}

Armstrong(153)

