var s = "naman";
function isPalindrome(s) {
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        if (s[i] != s[j])
            return false;
        i++;
        j--;
    }
    return true;
}
function printPalindromicSubstring(s) {
    for (var i = 0; i < s.length; i++) {
        for (var j = i; j < s.length; j++) {
            var substring = s.substring(i, j + 1);
            if (isPalindrome(substring)) {
                console.log(substring);
            }
        }
    }
}
printPalindromicSubstring(s);
