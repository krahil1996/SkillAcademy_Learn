var arr = [
    10, 20, 30, 40, 50, 60, 70, 5,
];
function swap(arr, l, r) {
    var temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}
function reverswholearray(arr) {
    var n = arr.length;
    var l = 2;
    var r = n - 3;
    while (l < r) {
        swap(arr, l, r);
        l++;
        r--;
    }
}
reverswholearray(arr);
console.log(arr);
