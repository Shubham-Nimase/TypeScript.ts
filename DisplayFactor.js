function DisplayFactor(iNo) {
    var i = 0;
    for (i = 1; i <= iNo; i++) {
        if (iNo % i == 0) {
            console.log(i);
        }
    }
}
DisplayFactor(20);
