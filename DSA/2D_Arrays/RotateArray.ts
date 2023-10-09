let matrix : number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]; 
function reverse (arr :number [])  {
 let l = 0 ; 
 let r = arr.length-1;
 while (l<r){
    let temp = arr [l];
    arr [l] = arr[r];
    arr [r] = temp;
 }
 l++;
 r--;
}
function rotate (matrix : number [][]) : void {
    let n = matrix.length;
    // stet1 - convert matrix to transpose form
    for (let i = 0; i<n; i++){
        for (let j = i; j<n; j++){
            let temp = matrix [i][j];
            matrix [i][j] = matrix [j][i];
            matrix [j][i] = temp
        }
    }
    // step2 - reverse all rows
    for (let i = 0; i<n; i++){
        reverse(matrix[i])
    }
};