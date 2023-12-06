/*
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


// set ejs in express 
app.set ('view engine', 'ejs'); 


app.get('/', (req, res) => {
    res.send ('<h1> HOME FILE</h1>')
})

app.get("/ejsfile1", (req, res) => {
  res.render('index')
});

app.get("/htmldemo", (req, res) => {
  res.sendFile(path.join(__dirname, 'demo.html'));
});

app.listen(port, ()=>{
    console.log (`Server is running at port number ${port}`);
})

*/

// 2nd Example

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// set ejs in express
app.set("view engine", "ejs");
//Product Data
const products = [
    {id:1, name:'Product 1', Price: 10},
    {id:1, name:'Product 2', Price: 20},
    {id:1, name:'Product 3', Price: 30},
]

app.get("/", (req, res) => {
  res.send("<h1> HOME FILE</h1>");
});

app.get("/ejsfile1", (req, res) => {
  res.render("index",{products});
});

app.get("/htmldemo", (req, res) => {
  res.sendFile(path.join(__dirname, "demo.html"));
});

app.listen(port, () => {
  console.log(`Server is running at port number ${port}`);
});