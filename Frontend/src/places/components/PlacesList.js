import React from "react";

import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElements/Card";
import "./PlacesList.css";

const PlacesList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>
            No places added yet
            <br /> Wish to add one?
          </h2>
          <button>Add Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          title={place.title}
          image={place.image}
          address={place.address}
          coordinates={place.coordinates}
          description={place.description}
          creatorId={place.creator}
        />
      ))}
    </ul>
  );
};

export default PlacesList;
