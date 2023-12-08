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
/*
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// set ejs in express
app.set("view engine", "ejs");
//Product Data
const product = [
    {id:1, name:'Product 1', Price: 10},
    {id:1, name:'Product 2', Price: 20},
    {id:1, name:'Product 3', Price: 30},
]

app.get("/", (req, res) => {
  res.send("<h1> HOME FILE</h1>");
});

app.get("/ejsfile1", (req, res) => {
  res.render("index",{product});
});

app.get("/htmldemo", (req, res) => {
  res.sendFile(path.join(__dirname, "demo.html"));
});

app.listen(port, () => {
  console.log(`Server is running at port number ${port}`);
});
*/

const { error } = require("console");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// set ejs in express
app.set("view engine", "ejs");
//Product Data
const novels = [
  {
    id: 1,
    ntitle: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 50,
    summary:
      "A classic novel that addresses racial injustice in the American South.",
    desc: "A classic novel that addresses racial injustice in the American South.",
  },
  {
    id: 2,
    ntitle: "1984",
    author: "George Orwell",
    price: 100,
    summary:
      "A dystopian novel depicting a totalitarian society and the impact of government surveillance.",
    desc: "A dystopian novel depicting a totalitarian society and the impact of government surveillance.",
  },
  {
    id: 3,
    ntitle: "Pride and Prejudice",
    author: "Jane Austen",
    price: 120,
    summary:
      "A timeless romance novel exploring themes of class, love, and societal expectations.",
    desc: "A timeless romance novel exploring themes of class, love, and societal expectations.",
  },
  {
    id: 4,
    ntitle: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 150,
    summary:
      "Set in the Roaring Twenties, this novel explores themes of wealth, love, and the American Dream.",
    desc: "Set in the Roaring Twenties, this novel explores themes of wealth, love, and the American Dream.",
  },
  {
    id: 5,
    ntitle: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    price: 199,
    summary:
      "A magical realist novel chronicling the Buendía family across seven generations in the fictional town of Macondo.",
    desc: "A magical realist novel chronicling the Buendía family across seven generations in the fictional town of Macondo.",
  },
];

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "/Views/home.ejs"));
  res.render("../Views/home.ejs");
});


app.get("/Partials", (req, res) => {
  res.render("Views/header");
});

app.get("/ejsfile1", (req, res) => {
  res.render("index", { novels });
});

app.get("/novels", (req, res) => {
  res.render("novels", { novels });
});

app.get("/novels/:id", (req, res) => {
  const novelid = parseInt(req.params.id);
  const novel = novels.find((nov) => nov.id === novelid);
  res.render("novelDetails", { novel });
});

app.get("/htmldemo", (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Server is running at port number ${port}`);
});
