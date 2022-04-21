var express=require("express");
var bodyParser=require("body-parser");
var app=express();
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'))
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use
(bodyParser.json());
app.get("/",function(req,res)
{
    // res.send("<h1>Break fast!!</h1>");
    res.render("list");
})

app.post("/", function(req,res)
{
    var i=req.body.n;
    console.log(i);
})

 app.listen(3000,function()
 {
     console.log("Listening to part 3000");
 })