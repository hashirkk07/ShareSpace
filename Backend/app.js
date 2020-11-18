const express = require("express");
const bodyParser = require("body-parser");

const placesRoute = require("./routes/placesRoute");
const usersRoute = require("./routes/usersRoute");

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRoute);
app.use("/api/users", usersRoute);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "Unexpected error occured" });
});

app.listen(4000);
