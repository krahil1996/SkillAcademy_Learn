const fs = require('fs');
const http = require('http');

const server = http.createServer();

// server.on('request',(req,res)=>{
//     fs.readFile('test.csv','',(err,data)=>{
//         if (err) return console.log (err);
//         res.end(data.toString());
//     })
// })
// --- to read heavesize files

fs.createReadStream

server.listen(5600);
