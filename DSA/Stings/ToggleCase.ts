let s: string = "AaBbDCcDefg";

function ToggleCase(s: string): string {
  let ans: string = "";
  for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i); // I am getting the ascii code of s[i]
    if (ascii >= 97) {
      // This is a smaller letter
      ascii -= 32;
    } else {
      ascii += 32;
    }
    ans += String.fromCharCode(ascii); // I am generating the character associated to the character
  }
  return ans;
}
console.log(ToggleCase(s));