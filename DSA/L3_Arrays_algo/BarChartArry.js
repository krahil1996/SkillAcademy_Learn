let arr = [4, 7, 6, 2, 10, 3, 5,];
function maxEle(arr) {
    var n = arr.length;
    var maxi = -Infinity;
    for (var i = 0; i < n; i++) {
        if (arr[i] > maxi) {
            maxi = arr[i];
        }
    }
    return maxi;
}
function barChartPrinter(arr) {
    var n = arr.length;
    // we want to find the height of the partern,
    // and the height of pattern = maximum element of the array
    var maxi = maxEle(arr);
    for (var i = maxi; i > 0; i--) {
        var s = "";
        for (var j = 0; j < n; j++) {
            if (arr[j] >= i)
                s += "*";
            else
                s += " ";
        }
        console.log(s);
    }
}
barChartPrinter(arr);
