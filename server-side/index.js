const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const port = process.env.PORT || 5000;
const app = express();

//middleware

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@ej-e-commerce-db.mapcb2u.mongodb.net/?retryWrites=true&w=majority`;

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
    // Send a ping to confirm a successful connection
    const productCollection = client
      .db("ej-e-commerce-db")
      .collection("products");

    app.get("/product", async (req, res) => {
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);
      const query = {};
      const cursor = productCollection.find(query);
      let products;
      if (page || size) {
        products = await cursor
          .skip(page * size)
          .limit(size)
          .toArray();
      } else {
        products = await cursor.toArray();
      }
      res.send(products);
    });

    app.get("/productCount", async (req, res) => {
      const count = await productCollection.countDocuments();
      res.send({ count });
    });

    //post to get products by id
    app.post("/productByKeys", async (req, res) => {
      const keys = req.body;
      const ids = keys.map((id) => new ObjectId(id));
      const query = { _id: { $in: ids } };
      const cursor = productCollection.find(query);
      const products = await cursor.toArray();

      res.send(products);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

//listen
app.listen(port, () => {
  console.log("Server is running on port", port);
});
