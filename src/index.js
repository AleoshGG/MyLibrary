// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Import routes

// Cors configuration
app.use(cors());

// Middleware to parse request bodies
app.use(bodyParser.json());

// Use routes
app.get("/", (req, res) => {
  res.status(200).json("Hola mundo");
});

app.listen(3000, () => {
  console.log("Express server running in http://localhost:3000");
});
