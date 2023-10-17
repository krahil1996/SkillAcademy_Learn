 let s : string = "aaabbbccdddgeefffg";

 function StringCompression(s: string) : string {
    let i = 0; 
    let ans : string = "";
    while (i<s.length){
        let j = i; 
        while (j<s.length && s[i] == s[j]) j++;
        ans += s[i];
        if (j -i > 1) ans += (j-i);
        i = j;
    }    
 return ans;
 }
console.log (StringCompression(s));