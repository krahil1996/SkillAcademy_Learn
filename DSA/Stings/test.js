var s = "abcdef";
s = s.split(""); // Converted string to array
s[0] = "f"; // changed the value of the array
s = s.join(""); //Converted array back to string
for (var i = 0; i < s.length; i++) {
    for (var j = i; j < s.length; j++) {
        console.log(s.substring(i, j + 1));
    }
}
