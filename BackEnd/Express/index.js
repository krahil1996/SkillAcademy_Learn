const express = require("express");
const app = express();
port = 3500;

app.get("/", (req, res) => {
  res.send("<b>Hello from Express</b>");
});

app.get("/contact", (req,res)=>{
    res.send ('Contact File');
})

app.get("/about", (req, res) => {
  res.send("About File");
});

app.listen(port, ()=>{
    console.log(`Server started and listing on Port ${port}`);
})
