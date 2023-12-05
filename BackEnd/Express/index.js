const express = require("express");
const app = express();
port = 3500;
const path = require("path");

// app.use(express.static(path.join(__dirname, "public")))
app.use('/',express.static(path.join(__dirname, 'public')))
app.use('/datafile', express.static(path.join(__dirname, 'public/data.html')));



app.get("/", (req, res) => {
    res.send("<b>Hello from Express</b>");
});

app.get("/contact", (req,res)=>{
    res.send ('Contact File');
})

app.get("/about", (req, res) => {
  res.send("About File");
});

app.get("/demoindex", (req, res) => {
    res.sendFile(path.join(__dirname, "/DemoIndex.html"));
})


app.listen(port, ()=>{
    console.log(`Server started and listing on Port, Please Go to Access Server ${port}`);
})
