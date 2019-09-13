var express         = require("express"),
    app             = express();

    app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("index");
});

app.listen(16169,function(){
    console.log("Runnning on 16169");
});