var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
];
function iteration1(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}
function iteration2(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = arr[i].length - 1; j >= 0; j--) {
            console.log(arr[i][j]);
        }
    }
}
iteration2(arr);
