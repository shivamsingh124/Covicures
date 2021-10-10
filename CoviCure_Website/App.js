const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

mongoose.connect(
  "mongodb+srv://Divyansh_Jain:Divy2000@cluster0.5aalj.mongodb.net/registerDB",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const signUpSchema = new mongoose.Schema({
  fullname: String,
  num: Number,
  email: String,
  add: String,
  category: String,
  vaccinated: String,
  msg: String,
});

const SignUp = mongoose.model("SignUp", signUpSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/Index.html");
});

app.get("/SignUp", function (req, res) {
  res.sendFile(__dirname + "/SignUp.html");
});

app.get("/Users", function (req, res) {
  SignUp.find({}, function (err, users) {
    if (err) {
      console.log(err);
    } else {
      res.render("Users", { users: users });
    }
  });
});

app.get("/Report", function (req, res) {
  res.sendFile(__dirname + "/Report.html");
});

app.post("/SignUp", function (req, res) {
  const newPerson = new SignUp({
    fullname: req.body.fname,
    num: req.body.num,
    email: req.body.mail,
    add: req.body.add,
    category: req.body.category,
    vaccinated: req.body.vaccinated,
    msg: req.body.msg,
  });
  SignUp.insertMany([newPerson], function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("New Sign-Up Added");
    }
  });
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server Started On Port 3000");
});
