const cors = require("cors")
const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const { MONGOURL } = require("./keys");
const session = require("express-session"); 
const MongoStore = require("connect-mongo")(session); 
const bodyParser = require("body-parser");
const { product } = require("../Backend/models/cartSchema");
const User = require('../Backend/models/user'); // Adjust the names to match the exported models



app.use(bodyParser.json());

app.use(express.json());

app.options('*', cors({
  origin: 'https://savastano-milano-nb4r.vercel.app/',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://savastano-milano-nb4r.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200); // For preflight requests
  } else {
    next();
  }
});

app.use(require("./routes/auth"));

mongoose.connect(MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});



app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(
  session({
    secret: "Bager124", 
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

app.get("/getusercart/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user.cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/createproduct", async (req, res) => {
  try {
    const newProduct = req.body; // New product data
    let mainDoc = await product.findOne();

    if (!mainDoc) {
      mainDoc = new product({ products: [] });
    }

    mainDoc.products.push(newProduct); // Add the new product at the end of the array
    await mainDoc.save(); // Save the updated mainDoc

    res.status(201).json(mainDoc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/putincart/:userId/:productIndex", async (req, res) => {
  try {
    const userId = req.params.userId;
    const productIndex = parseInt(req.params.productIndex);

    const user = await User.findById(userId);
    const mainDoc = await product.findOne();

    if (!user || !mainDoc) {
      return res.status(404).json({ error: "User or main document not found" });
    }

    if (productIndex < 0 || productIndex >= mainDoc.products.length) {
      return res.status(400).json({ error: "Invalid product index" });
    }

    const selectedProduct = mainDoc.products[productIndex];
    
    // Preserve existing cart items and add the selected product to the array
    user.cart = [...user.cart, selectedProduct];

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Hämta alla produkter
app.get("/Getproducts", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Hämta en specifik produkt
app.get("/products/:productId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Uppdatera en produkt
app.put("/products/:productId", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ta bort en produkt
app.delete("/products/:productId", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.productId);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
