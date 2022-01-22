const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
// import routes
const postsRoute = require("./routes/posts");
// middleware
app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("We are on Home page");
});

// connect to Database
const url = "mongodb:localhost";
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to database");
});

// start listening to the server
app.listen(process.env.PORT, () => {
  console.log(`Server started on ${process.env.PORT}`);
});
