var arr = [
    "flower",
    "flow",
    "flight"
];
function LongestCommonPrefix(arr) {
    var ans = "";
    for (var i = 0; i < arr[0].length; i++) { //0th string ke characters
        for (var j = 1; j > arr.length; j++) { //rest of the strings
            if (i >= arr[j].length || arr[j][i] != arr[0][i])
                return ans;
        }
        ans += arr[0][i];
    }
    return ans;
}
console.log(LongestCommonPrefix(arr));
