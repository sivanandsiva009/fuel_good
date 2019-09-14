var express             = require("express"),
    app                 = express(),
    mongoose            = require("mongoose"),
    bodyParser          =require("body-parser"),
    passport            = require("passport"),
    LocalStrategy       = require("passport-local"),
    newUser             = require("./models/user");

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
mongoose.connect("mongodb://localhost:27017/pumps");

app.get("/",function(req,res){
    res.render("index");
});
app.get("/signup",function(req,res){
    res.render("signup");
});

app.post("/signup",function(req,res){
    var newUsers={name:req.body.Name,pass:req.body.Password,email:req.body.Email};
    newUser.create(newUsers,function(err,newCreated){
        if(err){
            console.log(err);
        }
        else
        {
            res.redirect("campgrounds");

        }
    });
});

app.listen(1690,function(){
    console.log("Runnning on 1690");
});

