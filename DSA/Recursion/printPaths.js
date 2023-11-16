function printPaths(i, j, rows, cols, psf) {
    if (i == rows && j == cols) {
        console.log(psf);
        return;
    }
    if (i > rows || j > cols)
        return;
    // i go hori
    printPaths(i, j + 1, rows, cols, psf + " H");
    // i go ver 
    printPaths(i + 1, j, rows, cols, psf + " V");
}
function countPaths(i, j, rows, cols) {
    if (i == rows && j == cols)
        return 1;
    if (i > rows || j > cols)
        return 0;
    var hori = countPaths(i, j + 1, rows, cols);
    var verti = countPaths(i + 1, j, rows, cols);
    return hori + verti;
}
printPaths(1, 1, 3, 4, "");
console.log(countPaths(1, 1, 3, 4));
