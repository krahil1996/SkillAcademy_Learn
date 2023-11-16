function printPaths(
  i: number,
  j: number,
  rows: number,
  cols: number,
  psf: string
): void {
  if (i == rows && j == cols) {
    console.log(psf);
    return;
  }
  if ( i > rows || j > cols) return;

  // i go hori
  printPaths(i, j+1, rows , cols, psf + " H");

  // i go ver 
  printPaths(i +1 , j , rows, cols, psf + " V");
}

function countPaths (i, j, rows, cols) : number {
    if ( i ==rows && j == cols)
        return 1;
    if (i > rows || j> cols) return 0;

    let hori = countPaths(i, j+1, rows, cols);
    let verti = countPaths(i+1, j, rows, cols);
    return hori + verti ; 
}
printPaths (1,1, 3, 4, "");
console.log (countPaths (1,1, 3, 4));