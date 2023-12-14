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
app.get('/login', (req,res){
    let status = req.query.msg ? true:false;
    if (status) {
        return res.render('login',{
            error: "Invalid Details"
        })
    }else {
        
    }}
}))



app.listen(port, () => {
  console.log(`Server started on ${port} please goto access them.`);
});
