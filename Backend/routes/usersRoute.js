const express = require("express");
const router = express.Router();

router.get("/:userID", (req, res, next) => {
  const userID = req.params.userID;
  res.json({ user: userID });
});

module.exports = router;
