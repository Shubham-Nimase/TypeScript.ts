function Check(no1) {
    if (no1 % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
var ret = false;
ret = Check(8);
if (ret == true) {
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}
