function Maximum(iNo1, iNo2, iNo3) {
    /* if((iNo1>iNo2)&&(iNo1>iNo3))
     {
         return iNo1;
     }
     else if((iNo2>iNo1)&&(iNo2>iNo3))
     {
         return iNo2;
     }
     else((iNo3>iNo1)&&(iNo3>iNo2))
     {
         return iNo3;
     }*/
    if (iNo1 > iNo2) {
        return iNo1;
    }
    else if (iNo2 > iNo3) {
        return iNo2;
    }
    else {
        return iNo3;
    }
}
var result;
result = Maximum(23, 89, 6);
console.log("The Maximum Number is=" + result);
