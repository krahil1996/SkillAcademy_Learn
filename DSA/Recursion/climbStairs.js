function climbStair(i, psf, n) {
    if (i === n) {
        console.log(psf);
        return;
    }
    if (i > n) {
        return;
    }
    climbStair(i + 1, psf + " 1", n);
    climbStair(i + 2, psf + " 2", n);
    climbStair(i + 3, psf + " 3", n);
}
function countWaysToClimbStairs(i, n) {
    if (i == n)
        return 1;
    if (i > n)
        return 0;
    var oneJump = countWaysToClimbStairs(i + 1, n);
    var twoJump = countWaysToClimbStairs(i + 2, n);
    var threeJump = countWaysToClimbStairs(i + 3, n);
    return oneJump + twoJump + threeJump;
}
climbStair(0, "", 4);
console.log(countWaysToClimbStairs(0, 4));
