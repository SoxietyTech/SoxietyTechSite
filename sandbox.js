const express = require("express");
const path = require("path");
const env = require("dotenv");

const port = process.env.PORT || 3000;

//using app to simplify express use
const app = express();

app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Index.html"));
});

app.listen(port, () => {
  console.log(`Server listening at ${[port]}`);
});
