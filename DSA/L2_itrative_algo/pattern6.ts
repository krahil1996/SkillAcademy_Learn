let n = 7;
let space = Math.floor(n / 2);
let stars = 1;
for (let i = 1; i <= n; i++) {
  let s: string = "";
  for (let j = 1; j <= space; j++) {
    s += " ";
  }
  for (let j = 1; j <= stars; j++) {
    s += "*";
  }

  console.log(s);
  if (i <= n / 2) {
    space -= 1;
    stars += 2;
  } else {
    stars -= 2;
    space += 1;
  }
}
