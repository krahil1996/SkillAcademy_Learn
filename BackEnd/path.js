const path=require('path');
let a = path.basename('d://newfolder//extra//abc.html');
let b = path.extname("d://newfolder//extra//abc.html");
let c = path.dirname("d://newfolder//extra//abc.html");;
console.log(a);
console.log(b);
console.log(c);
console.log(__dirname);
console.log(__filename);