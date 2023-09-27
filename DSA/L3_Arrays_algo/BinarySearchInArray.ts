let arr: number[] = [2, 8, 11, 15, 22, 32, 47, 48, 51, 66, 72];
function binarySearch(arr: number[], target: number): any {
  let l = 0;
  let r = arr.length - 1;
  

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) {
      // Discard left half, as i am smaller, so all the people to my left side also be smaller.
      l = mid + 1;
    } else if (arr[mid] > target) {
      // Discard right half, as i am greater, so all the people to my right side also be greater.
      r = mid - 1;
    }
  }
  return "Element is Not Found in the Array"; // Element is not present in the array. 
}

console.log(binarySearch(arr, 22));
