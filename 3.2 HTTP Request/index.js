import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
   res.send("<h1>Hello world!</h1>")
})

app.get("/contact",(req,res)=>{
    res.send("<h2>My phone number is:03332547852</h2>")
 })

app.get("/about",(req,res)=>{
    res.send("<p>Hello! My name is Dre and I am a web developer</p>")
 })


app.listen(port,()=>{
  console.log(`Server started on port ${port}`);
})