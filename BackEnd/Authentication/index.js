const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cookieparser = require("cookie-parser");
const port = 3200;

// create server
const app = express();
// start secure protocol
app.use(helmet());
// Cookie parser
app.use(cookieparser());
// URL encoded for form data url encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// template engine - for dynamic data providing to page
app.set("view engine", "ejs");
//for set viewing HTML/EJS page stored in views folder
app.set("views", path.join(__dirname, "/views"));
// Routing
app.get("/", (req, res) => {
  let username = req.cookies.username;
  return res.render("home", {
    username
  });
});
app.get ('/login', (req,res)=>{
  let status = req.query.msg ? true : false;
  if (status){
    return res.render('login', {
      error : "invalid Details"
    })
  }
  else {
    return res.render('login');
  }

}); 

app.get('/welcome', (req, res) => {
  let username = req.cookies.username;
  return res.render('welcome', {username});
});

app.post ('/Process_login', (req,res)=>{
  let {username, password} = req.body; // destructure
  // let username = req.body.username
  // let password = req.body.password
  let userdetails = {
    username: "john",
    password: 'safe123',
  };
  if (username === userdetails['username'] && password === userdetails['password']) {
    res.cookie('username', username);
    return res.redirect ('/welcome');
  }
  else {
    return res.redirect ('/login?msg=fail')
  }
})

app.get ('/logout', (req,res) => {
  res.clearCookie('username');
  return res.redirect ('/login');
  
})

app.listen(port, () => {
  console.log(`Server started on ${port} please goto access them.`);
});
