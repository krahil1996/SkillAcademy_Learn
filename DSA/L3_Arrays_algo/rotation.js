var arr = [1, 2, 3, 4, 5];
function swap(arr, l, r) {
}
function reverseInRange(arr, l, r) {
}
function rotateArray(arr, k) {
    var n = arr.length;
    k = k % n;
    reverseInRange(arr, n - k, n - 1);
    reverseInRange(arr, 0, n - k - 1);
    reverseInRange(arr, 0, n - 1);
}
console.log(rotateArray(arr, 3));
