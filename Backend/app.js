const express = require("express");
const bodyParser = require("body-parser");

const placesRoute = require("./routes/placesRoute");

const app = express();

app.use(placesRoute);

app.listen(4000);
