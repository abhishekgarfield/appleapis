var express=require("express");
var app=express();
app.use(express.json());

var cors=require("cors");
app.use(cors());
const port=9000;
const uri="mongodb+srv://garfield:1234@cluster0.anf24op.mongodb.net/?retryWrites=true&w=majority"

var MongoClient=require("mongodb").MongoClient;



app.get("/test",async(req,res)=>{
    console.log("here");
    res.send("hi please insert data");
})
MongoClient.connect(uri,(err,client)=>{
    if(err) return console.log("connection failed");
    db=client.db("app-data");
    app.listen(port,()=>{
        console.log(port);
    })
    
    
})



