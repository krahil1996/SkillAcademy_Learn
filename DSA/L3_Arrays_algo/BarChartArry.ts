let arr : number [] = [4, 7, 6, 2, 4, 3, 5];
function maxEle(arr) {
  let n = arr.length;
  let maxi = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] > maxi) {
      maxi = arr[i];
    }
  }
  return maxi;
}
// we want to find the height of the partern,
// and the height of pattern = maximum element of the array
function barChartPrinter(arr) {
  let n = arr.lenght;
  let maxi = maxEle(arr);
  for (let i = maxi; i > 0; i--) {
    let s="";
    for (let j = 0; j < n; j++) {
      if (arr[j] >= i) s += "*";
      else s += " ";
    }
    console.log(s)
  }
}
barChartPrinter(arr);
