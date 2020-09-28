require('dotenv').config();

const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes 
const routes = require("./controllers/burgerController.js");

app.use(routes);


app.listen(PORT, function () {
    console.log("Server listening on port " + PORT);
});
