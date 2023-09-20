var n = 7;
var space = Math.floor(n / 2);
var stars = 1;
for (var i = 1; i <= n; i++) {
    var s = "";
    for (var j = 1; j <= space; j++) {
        s += " ";
    }
    for (var j = 1; j <= stars; j++) {
        s += "*";
    }
    console.log(s);
    if (i <= n / 2) {
        space -= 1;
        stars += 2;
    }
    else {
        stars -= 2;
        space += 1;
    }
}
