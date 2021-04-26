import React, { useState } from "react";

function Pet(props) {
  const [vaccinated, setVaccinated] = useState(props.pet.isVaccinated);
  return (
    <div>
      {props.pet.name} - Vaccinated: <button>{}</button>
    </div>
  );
}

export default Pet;
