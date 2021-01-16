const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");

//public static path
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

//routing
app.get("/", (req, res) => {
  res.send("Welcome to Weather App");
});

app.get("/about", (req, res) => {
  res.send("Hi, I'm Amartya Aishwarya");
});

app.get("/weather", (req, res) => {
  res.send("Search your favourite city!");
});

app.get("*", (req, res) => {
  res.send("404 Error Page!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
