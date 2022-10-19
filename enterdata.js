var express=require("express");
var app=express();
app.use(express.json());

var cors=require("cors");
app.use(cors());
const port=process.env.PORT || 9000;
const uri="mongodb+srv://garfield:1234@cluster0.anf24op.mongodb.net/?retryWrites=true&w=majority"

var MongoClient=require("mongodb").MongoClient;



MongoClient.connect(uri,(err,client)=>{
    if(err) return console.log("connection failed");
    else{
        db=client.db("app-data");
        app.listen(port,()=>{
            console.log("insert data");
            console.log(`Server is running on ${port}`);
        })
    }
})

app.get("/test",async(req,res)=>{
    console.log("here");
    res.send("hi please insert data");
})

app.get("/insertdata",async(req,res)=>{
    const {products}=req.body;
   const rd=await db.collection("products").updateMany({},{$set:{"product_rating":4.5}})
  
   console.log(rd);
   res.send(rd);
})

