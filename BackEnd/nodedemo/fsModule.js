const fs = require("fs");
/*
fs.readFile('myfile.txt', 'UTF-8', (err, data) => {
  console.log(data);
});
*/
// Async FileReading
/*
fs.readFile("myfile.txt", (err, data) => {
  console.log(data.toString());
});
console.log('Finished Reading');
*/

// Sync File Reading
/*
var a = fs.readFileSync("myfile.txt", "utf-8");
console.log(a);
console.log("Finished Reading");
*/
// File Writing- Async way
/*
fs.writeFile('myfile.txt', 'hello students', ()=>{

})
console.log ("Writing");
*/
/*
fs.appendFileSync("myfile.txt", "line again\n"); // \n use for next line write

console.log("writed");
*/
// fs.mkdir // for make folder
// fs.unlink // for deleting files
// fs.rmdir // for deleting folder

// multiple files creating
/*
let i = 0; 
for (i=1; i<=10; i++){
    fs.writeFileSync(`files${i}.html`, `This is file number ${i}`);
}
*/

// Multiple files Deleting
/*
let i = 0;
for (i=1; i<=10; i++){
    fs.unlinkSync(`files${i}.html`)
}
*/

// Multiple files Reading
// way - 1
/*
let i = 0;
for (i = 1; i <= 3; i++) {
    let a = fs.readFileSync(`myfile${i}.html`);
    console.log(a.toString());

}
*/

// way 2 with any file if ignore
/*
let i = 0;
for (i = 1; i <= 3; i++) {
  if (i == 2) {
    console.log(`The myfile${i} Can not be read`);
  } else {
    let a = fs.readFileSync(`myfile${i}.html`);
    console.log(a.toString());
  }
}
*/

// way 3 with promises

const files = ["mtfile1.html", "mtfile2.html", "mtfile3.html"];
function readData(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, "utf-8", function (err, data) {
      if (err) {
        reject();
      } else {
        resolve();
      }
    });
  });
}
readData(files[1]);
