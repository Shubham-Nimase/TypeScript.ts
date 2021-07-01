function maximum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var max = 0;
    var i;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var result = 0;
result = maximum(1, 23, 89, 6, 29, 560, 45, 77, 32);
console.log("Maximum number is=" + result);
