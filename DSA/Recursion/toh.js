function toh(n, s, d, h) {
    if (n == 0)
        return;
    toh(n - 1, s, h, d);
    console.log("move disk ".concat(n, " from ").concat(s, " to ").concat(d));
    toh(n - 1, h, d, s);
}
toh(4, "a", "b", "c");
