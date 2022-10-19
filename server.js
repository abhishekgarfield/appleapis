var express=require("express");
var app=express();
app.use(express.json());

var cors=require("cors");
app.use(cors());
const port=process.env.PORT || 9000;
const uri="mongodb+srv://garfield:1234@cluster0.anf24op.mongodb.net/?retryWrites=true&w=majority"

var MongoClient=require("mongodb").MongoClient;

/*app.get("/test",async(req,res)=>{
    const client=new MongoClient(uri);
    await client.connect();
    const db=client.db("app-data");
    const data=await db.collection("products").find().toArray();
    res.send(data);
})
app.listen(9000);*/

MongoClient.connect(uri,(err,client)=>{
    if(err) return console.log("connection failed");
    else{
        db=client.db("app-data");
        app.listen(()=>{
            console.log(`Server is running on ${port}`);
        })
    }
})

