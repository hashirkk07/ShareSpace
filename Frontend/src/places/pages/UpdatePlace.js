import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

import "./NewPlace.css";

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
const UpdatePlace = () => {
  const placeID = useParams().pid;
  const place2update = SamplePlaces.find((place) => place.id === placeID);

  if (!place2update) {
    return (
      <div className="center">
        <h2>Sorry! Place not found..</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        element="input"
        id="title"
        label="Title"
        type="text"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={place2update.title}
        valid={true}
      />
      <Input
        element="textarea"
        id="description"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description of min character length 5."
        onInput={() => {}}
        value={place2update.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
