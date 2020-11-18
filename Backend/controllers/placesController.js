const HttpError = require("../models/http-error");
const uuid = require("uuid/v4");
const SamplePlaces = [
  {
    id: "p1",
    title: "Taj Mahal",
    address: "Dharmapuri, Forest Colony, Tajganj, Agra",
    image:
      "https://www.publicdomainpictures.net/pictures/180000/velka/taj-mahal.jpg",
    description:
      "Taj Mahl is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra.",
    coordinates: {
      lat: "27.175228299392455",
      lng: "78.04227093895875",
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Taj Mahal",
    address: "Dharmapuri, Forest Colony, Tajganj, Agra",
    image:
      "https://www.publicdomainpictures.net/pictures/180000/velka/taj-mahal.jpg",
    description:
      "Taj Mahl is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra.",
    coordinates: {
      lat: "27.175228299392455",
      lng: "78.04227093895875",
    },
    creator: "u2",
  },
];

const getPlaceByUser = (req, res, next) => {
  const userPlace = SamplePlaces.find(
    (place) => place.creator === req.params.userID
  );
  if (!userPlace) {
    return next(
      new HttpError(
        404,
        "Sorry, we were not able to find a place with provided user ID"
      )
    );
  }
  res.json({ userPlace });
};

const getPlaceByID = (req, res, next) => {
  const reqPlace = SamplePlaces.find(
    (place) => place.id === req.params.placeID
  );
  if (!reqPlace) {
    return next(
      new HttpError(404, "Sorry, we were not able to find a place with that ID")
    );
  }
  res.json({ reqPlace });
};

const createPlace = (req, res, next) => {
  const { title, address, description, coordinates, creator } = req.body;
  place = {
    id: uuid(),
    title,
    address,
    description,
    coordinates,
    creator,
  };
  SamplePlaces.push(place);
  res.status(201).json({ place: place });
};

exports.getPlaceByID = getPlaceByID;
exports.getPlaceByUser = getPlaceByUser;
exports.createPlace = createPlace;
