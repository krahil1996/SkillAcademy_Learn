function climbStairs(i: number, psf: string, n: number): void {
  if (n == 0) {
    console.log(psf);
    return;
  }
  if (i > n) {
    return;
  }
  //options
  climbStairs(i + 1, psf + "1 ", n);
  climbStairs(i + 2, psf + "2 ", n);
  climbStairs(i + 3, psf + "3 ", n);
}
climbStairs(0, " ", 4);
