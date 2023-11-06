const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./server/routes/router");

const connectDB = require("./server/database/connection");

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(morgan("tiny"));
// mongodb connection
connectDB();
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// load router
app.use("/", router);

app.listen(3000, () => {
  console.log("Listening port: 3000");
});
