var s = "abcdbeaA";
function stringWithDiff(s) {
    var ans = "";
    var n = s.length;
    for (var i = 0; i < n; i++) {
        ans += s[i];
        if (i + 1 < n) {
            ans += s.charCodeAt(i + 1) - s.charCodeAt(i);
        }
    }
    return (ans);
}
console.log(stringWithDiff(s));
