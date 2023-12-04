// Way - 1
/*
 const http = require("http");
http.createServer((req, res) => {
     res.end('<h1>Hello From Server </h1>')
 }).listen(3400);
*/

//Way-2
/*
const http=require('http');
const port = 3500;
const server=http.createServer((req,res) => {
    res.end('<h1>Hello From Server')
});
server.listen(port,()=>{
    console.log(`Server is running at port number ${port}`);
})
*/

// Way- 3
/*
const { prototype } = require("events");
const http = require("http");
const port = 3500;
const server = http.createServer((req, res) => {
  res.write("<h1>Hello From Server using write 1");
  res.write("<h1>Hello From Server using write 2");
  res.end();
});
server.listen(port, () => {
  console.log(`Server is running at port number ${port}`);
});
*/

// Way- 4

const { prototype } = require("events");
const http = require("http");
const fs = require('fs');
const port = 3600;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<h1>Sever has been created and Connected !");
    res.end();
  } else if (req.url == "/contact") {
    res.write("<h1>Hello From Server using Contact");
    res.end();
  } else if (req.url == "/about") {
    res.write("<h1>Hello From Server using About");
    res.end();
  }
  else if (req.url == '/htmlfile'){
    const data=fs.readFileSync('/index.html');
    res.end(data);
  } 
  // else {
  //   res.statusCode=404;
  //   res.setHeader('content-typecls', 'text/html')
  //   res.write("<h2>Can not find Page</h2>");
  //   res.end();
  // }
});
server.listen(port, () => {
  console.log(`Server is running at port number ${port}`);
});
