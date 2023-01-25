
const express = require("express");

const app=express();



const name="Rakesh"

app.use(express.static("public"))


app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
})




app.listen(3000, function(){
    console.log("server is numming at port 3000");
})