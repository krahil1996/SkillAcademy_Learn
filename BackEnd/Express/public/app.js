/*
const express = require("express");
const app = express();
const port = 3600;
const reqfilter = (req,res,next)=>{ //middleware
    if (!req.query.age) {
        res.send ('<h1>Please enter your age </h1>')
    }
    else if (req.query.age <18 ){
        res.send("<h1>You are not allowed to access this page </h1>");
    }
    else {
        next();
    }
} 

app.use (reqfilter);

app.get("/", (req, res) => {
  res.send("<h1><b>Hello from Express</b>");
});

app.get("/contact", (req, res) => {
  res.send("Contact File");
});

app.get("/about", (req, res) => {
  res.send("About File");
});

app.get("/demoindex", (req, res) => {
  res.sendFile(path.join(__dirname, "/DemoIndex.html"));
});



app.listen(port, () => {
  console.log(
    `Server started and listing on Port, Please Go to Access Server ${port}`
  );
});
*/
// ---- Another way to use filter
/*
const express = require("express");
const app = express();
const port = 3600;
const reqfilter = require('./middleware');
const router = express.Router();
const path = require('path');

router.use(reqfilter);

app.get("/", (req, res) => {
  res.send("<h1><b>Hello from Express</b>");
});

app.get("/contact", (req, res) => {
  res.send("Contact File");
});

router.get("/about", (req, res) => {
  res.send("About File");
});

app.get("/demoindex", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.use('/', router)
app.listen(port, () => {
  console.log(
    `Server started and listing on Port, Please Go to Access Server ${port}`
  );
});
*/