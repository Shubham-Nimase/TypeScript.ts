function Armstrong(ino) {
    //var ino:number=153
    var rem = 0;
    var sum = 0;
    while (ino > 0) {
        rem = ino % 10;
        sum = sum + (rem * rem * rem);
        ino = ino / 10;
    }
    if (sum == ino) {
        console.log("It is Armstrong number");
    }
    else {
        console.log("It is not Armstrong number");
    }
}
//var result:number=0;
Armstrong(153);
