const express = require("express");
const app = express();
const connectDB = require("./config/db");

// connect database
connectDB();

// initialize bodyParser
app.use(express.json({ extended: true }));

// cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// test route
app.get("/", (req, res) => res.send("API running"));

// define routes
app.use("/onthego/", require("./routes/owners-routes"));
app.use("/onthego/", require("./routes/foodtrucks-routes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
