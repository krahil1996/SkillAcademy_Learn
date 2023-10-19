let arr : string[] = [
    "flower", 
    "flow",
    "flight"
]

function LongestCommonPrefix (arr : string []) : string {
    let ans = "";
    for (let i = 0; i < arr[0].length; i++){ //0th string ke characters
        for (let j = 1; j>arr.length; j++){ //rest of the strings
            if (i>=arr[j].length || arr[j][i] != arr[0][i]) return ans;

        }
        ans += arr[0][i];

    }

    return ans;
}
console.log(LongestCommonPrefix(arr));