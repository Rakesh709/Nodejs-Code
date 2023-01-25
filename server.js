const express= require("express");

const app=express();

app.get("/",function(request,response){
    response.send("hello Rakesh!")
})

app.get("/contact",function(req,res){
    res.send("concat me at @rakesh");
})

app.get("/about",function(req,res){
    res.send("my name is Rakesh Kumar")
})

app.listen(3000,function(){
    console.log("server srtarted at 3000")
});