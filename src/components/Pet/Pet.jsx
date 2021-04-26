import React, { useState } from "react";

function Pet(props) {
  const [vaccinated, setVaccinated] = useState(props.pet.isVaccinated);
  const [status, setStatus] = useState("show");

  const toggleVaccinationStatus = async () => {
    setStatus("fetching");

    fetch("/api/pets/", {
      method: "post",
      body: JSON.stringify({
        name: props.pet.name,
        isVaccinated: !vaccinated,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setVaccinated((prev) => !prev);
          setStatus("show");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {props.pet.name} - Vaccinated:{" "}
      <button type="button" onClick={() => toggleVaccinationStatus()}>
        {status === "show" ? (vaccinated ? "true" : "false") : "..."}
      </button>
    </div>
  );
}

export default Pet;
