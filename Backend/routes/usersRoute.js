const express = require("express");
const router = express.Router();

router.get("/api/users", (req, res, next) => {
  console.log("Intercepted GET to /api/users");

  res.json({ message: "Status 200 OK" });
});

module.exports = router;
