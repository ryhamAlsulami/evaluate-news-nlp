let textinput = [];
const dotenv = require("dotenv");
dotenv.config();
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
const API_KEY = process.env.API_KEY;
var path = require("path");
const fetch = require("node-fetch");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const portN = 8081;
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
//
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("dist"));

//routes
app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});
app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
app.post("/nlp", async function(req, res) {
  textinput = await req.body.urlData;
  const apiURL = `${baseURL}key=${API_KEY}&url=${textinput}&lang=auto`
  const response = await fetch(apiURL)
  const nlpData = await response.json()
  res.send(nlpData)
})
//server listen to the Port
app.listen(portN, function () {
  console.log(`Example app listening on port ${portN}!`);
});
