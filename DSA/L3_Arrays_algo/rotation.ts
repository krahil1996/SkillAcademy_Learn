let arr: number[] = [1, 2, 3, 4, 5];

function swap(arr: number[], l: number, r: number): any {

}
function reverseInRange(arr: number[], l: number, r: number): void {

}
function rotateArray(arr: number[], k: number) {
  let n = arr.length;
  k = k % n;
  reverseInRange(arr, n - k, n - 1);
  reverseInRange(arr, 0, n - k - 1);
  reverseInRange(arr, 0, n - 1);
}

rotateArray(arr, 3);
console.log (arr);
