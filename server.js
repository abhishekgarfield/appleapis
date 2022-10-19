var express = require("express");
var app = express();
app.use(express.json());

var cors = require("cors");
const { Collection } = require("mongodb");
app.use(cors());
const port = 9000;
const uri =
  "mongodb+srv://garfield:1234@cluster0.anf24op.mongodb.net/?retryWrites=true&w=majority";

var MongoClient = require("mongodb").MongoClient;

app.get("/test", async (req, res) => {
  console.log("here");
  res.send("hi please insert data");
});
MongoClient.connect(uri, (err, client) => {
  if (err) return console.log("connection failed");
  db = client.db("app-data");
  app.listen(port, () => {
    console.log(`server is running on ${port}`);
  });
});

app.get("/getuser/", async (req, res) => {
  console.log("in user");
  const { user_id } = req.query;
  const collection = db.collection("users");
  try {
    const user = await collection.findOne({ user_id: user_id });
    res.send(user);
    console.log(user);
  } catch (err) {
    console.log(err);
  }
});

app.get("/", async (req, res) => {
  console.log("in find");
  const { category_id } = req.query;
  console.log(category_id);
  const collection = db.collection("products");
  var query = {};
  try {
    if (category_id) {
      console.log("here");
      query = { category_id: { $eq: Number(category_id) } };
    } else {
      query = {};
    }
    const products = await collection.find(query).toArray();
    res.send(products);
    console.log(products);
  } catch (err) {
    console.log(err);
  }
});

app.get("/filter", async (req, res) => {
  console.log("in find");
  const { category_id, hcost, lcost, color, hrating, lrating } = req.query;
  console.log(hrating);
  const collection = db.collection("products");
  var query = {};
  try {
    if (category_id) {
      console.log("here");
      query = { category_id: { $eq: Number(category_id) } };
    } else if (color) {
      query = { colors: { $in: [color] } };
    } else if (hcost || lcost) {
      if (hcost && lcost) {
        query = query = {
          $and: [
            { product_price: { $gte: Number(lcost) } },
            { product_price: { $lte: Number(hcost) } },
          ],
        };
      }
    } else if (hrating || lrating) {
      if (hrating && lrating) {
        query = {
          $and: [
            { product_rating: { $gte: Number(lrating) } },
            { product_rating: { $lte: Number(hrating) } },
          ],
        };
      }
    } else {
      query = {};
    }
    console.log(query);
    const products = await collection.find(query).toArray();
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});

app.get("product/:product_id", async (req, res) => {
  console.log("product page");
  console.log("in find");
  const { product_id } = req.params;
  console.log(product_id);
  const collection = db.collection("products");

  try {
    const product = collection.findOne({ Product_id: product_id });
    return res.send(product);
  } catch (err) {
    console.log(err);
  }
});
