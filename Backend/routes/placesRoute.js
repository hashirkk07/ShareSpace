const express = require("express");
const router = express.Router();

router.get("/api/places", (req, res, next) => {
  console.log("Intercepted GET to /api/places");

  res.json({ message: "Status 200 OK" });
});

module.exports = router;
