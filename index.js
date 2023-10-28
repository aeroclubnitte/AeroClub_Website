const express = require("express");
// const dotenv = require("dotenv")
// const cors = require("cors")
// const bodyParser = require("body-parser")
// const crypto = require("crypto")
const SendEmail=require("./sendmail.js");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static("assets"));
app.use("/css", express.static(__dirname + "assets/css"));
app.use("/js", express.static(__dirname + "assets/js"));
app.use("/vendor", express.static(__dirname + "assets/vendor"));
app.use("/img", express.static(__dirname + "assets/img"));
app.use("/views", express.static(__dirname + "views"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: "false",
  })
);
app.set("views", "./views");
app.set("view engine", "ejs");
app.get("/",async(req,res)=>{
    res.render("index.ejs");
})
app.get("/home",(req,res)=>{
    res.render("index.ejs");
});

app.get("/projects",(req,res)=>{
    res.render("projects.ejs");
});

app.get("/gallery",(req,res)=>{
    res.render("gallery.ejs");
});

app.get("/team",(req,res)=>{
    res.render("team.ejs");
});

app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
});

app.get("/register",(req,res)=>{
    res.render("register.ejs");
});

app.post("/mail",(req,res)=>{
    let {name, email, subject,message}=req.body;
    console.log(name,email,subject,message);
    console.log(req.body);
    SendEmail.sendmail(name,email,subject,message);
    res.send("Successful");
   

})

app.listen(port, () => {
    console.log(`Connection is established with the required port number ${port}`);
  });