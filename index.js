var express         = require("express"),
    app             = express();

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));

app.get("/",function(req,res){
    res.render("index");
});
app.get("/signup",function(req,res){
    res.render("signup");
});

app.listen(1690,function(){
    console.log("Runnning on 1690");
});