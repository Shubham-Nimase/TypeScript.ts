function Area(radius, PI) {
    var ans;
    if (PI == undefined) {
        PI = 3.14;
    }
    ans = radius * radius * PI;
    return ans;
}
var Result;
Result = Area(10);
console.log("Area of circle is=" + Result);
