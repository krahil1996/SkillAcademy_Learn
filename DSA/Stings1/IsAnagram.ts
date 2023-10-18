let s: string = "naman";
let t: string = "amnan";

function isAnagram(s: string, t : string): boolean {
  if (s.length != t.length) return false;
  let freqS : number[] = new Array(26).fill(0);
  let freqT : number[] = new Array(26).fill(0);
  // Creating freq array for s
  for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i);
    let index = ascii - 97;
    freqS[index]++;
  }

  // Creating freq array for T
  for (let i = 0; i < t.length; i++) {
    let ascii = t.charCodeAt(i);
    let index = ascii - 97;
    freqT[index]++;
  }
  // Comparing both the freq array
  for (let i = 0; i < freqS.length; i++) {
    if (freqS[i] != freqT[i]) return false;
  }
  return true;
}
console.log (isAnagram(s, t));