import React from "react";
import Pet from "../Pet/Pet";

function Client(props) {
  return (
    <div>
      {props.client.name}
      {props.client && props.client.pets.map((pet) => <Pet pet={pet} />)}
    </div>
  );
}

export default Client;
