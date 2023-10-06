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
function iteration3(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = arr[i].length - 1; j >= 0; j--) {
            console.log(arr[i][j]);
        }
    }
}
function zigZag(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            //Even row
            for (var j = 0; j < arr[i].length; j++)
                console.log(arr[i][j]);
        }
        else {
            for (var j = arr[i].length - 1; j >= 0; j--)
                console.log(arr[i][j]);
        }
    }
}
function iteration4(arr) {
    for (var j = 0; j < arr[0].length; j++) {
        for (var i = arr.length - 1; i >= 0; i--) {
            console.log(arr[i][j]);
        }
    }
}
iteration4(arr);
