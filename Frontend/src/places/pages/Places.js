import React from "react";

import PlacesList from "../components/PlacesList";

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
      long: "78.04227093895875",
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
      long: "78.04227093895875",
    },
    creator: "u2",
  },
];

const Places = () => {
  return <PlacesList items={SamplePlaces} />;
};

export default Places;
