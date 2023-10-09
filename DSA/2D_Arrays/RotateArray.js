var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function reverse(arr) {
    var l = 0;
    var r = arr.length - 1;
    while (l < r) {
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
    }
    l++;
    r--;
}
function rotate(matrix) {
    var n = matrix.length;
    // stet1 - convert matrix to transpose form
    for (var i = 0; i < n; i++) {
        for (var j = i; j < n; j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // step2 - reverse all rows
    for (var i = 0; i < n; i++) {
        reverse(matrix[i]);
    }
}
;
