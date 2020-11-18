const express = require("express");
const router = express.Router();

const placesController = require("../controllers/placesController");

router.get("/user/:userID", placesController.getPlaceByUser);

router.get("/:placeID", placesController.getPlaceByID);

router.post("/", placesController.createPlace);

module.exports = router;
