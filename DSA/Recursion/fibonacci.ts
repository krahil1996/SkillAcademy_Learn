function fibonacci(n:number):number {
if (n == 0) return 0;
if (n == 2) return 1;
let fnm1 = fibonacci(n-1);
let fnm2 = fibonacci(n-2);

return fnm1 + fnm2;
}
console.log(fibonacci(5));