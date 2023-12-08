const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.port;
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb")    ;

//middleware
app.use(cors({
  origin: ["https://mern-computer-store-client.vercel.app"],
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//mongodb configuration
const uri = process.env.MONGODB_CONNECT_URI

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Create a collection of documents

    const productCollections = client.db("ProductInventory").collection("prodocuts")

    // Define the route to handle the product upload
    app.post("/upload-product", async(req, res) => {
      const data = req.body;
      const result = await productCollections.insertOne(data);
      res.send(result);
    });

    // get all products from the database

    // app.get("/all-products", async (req, res) => {
    //     const products = productCollections.find();
    //     const result = await products.toArray();
    //     res.send(result);
    // })

    //update a product data : patch or update methods
    app.patch("/product/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id)
      const updateProductData = req.body;
      const filter = {_id: new ObjectId(id)}
      const updateDoc = {
        $set: {
          ...updateProductData
        },
      }
      const options = {upsert: true};
      //update 
      const result = await productCollections.updateOne(filter, updateDoc, options);
      res.send(result);
    })

    // delete a product data
    app.delete("/product/:id", async (req, res) => {
      const id = req.params.id;
      const filter = {_id : new ObjectId(id)}
      const result = await productCollections.deleteOne(filter);
      res.send(result);
    })

    //find by category

    app.get("/all-products", async(req,res) => {
      let query = {};
      if(req.query?.category) {
          query = {category: req.query.category}
      }
      const result = await productCollections.find(query).toArray();
      res.send(result);
    })

    // to get single boook data
    app.get("/product/:id", async(req, res) => {
      const id  = req. params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await productCollections.findOne(filter)
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } finally {
    // Ensure that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
