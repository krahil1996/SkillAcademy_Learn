var arr = [
    10, 20, 30, 40, 50, 60, 70, 5, 25, 10, 54, 13, 15, 19, 18, 21, 54, 32,
];
function swap(arr, l, r) {
    var temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}
function reverswholearray(arr) {
    var n = arr.length;
    var l = 0;
    var r = n - 1;
    while (l < r) {
        swap(arr, l, r);
        l++;
        r--;
    }
}
reverswholearray(arr);
console.log(arr);
// function revers(arr, sourceIndex, destinationIndex){
//   let temp = arr[destinationIndex];
//   arr[destinationIndex] = arr[sourceIndex];
//   arr[sourceIndex] = temp;
// }
