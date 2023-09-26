let arr: number[] = [
  10, 20, 30, 40, 50, 60, 70, 5,
];

function swap(arr: number[], l : number, r : number) : any {
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
}
function reverswholearray(arr: number[]): void {
  let n = arr.length;
  let l = 2;
  let r = n - 3;
  while (l < r) {
    swap(arr, l, r);
    l++;
    r--;
  }
}
reverswholearray(arr);
console.log(arr);
