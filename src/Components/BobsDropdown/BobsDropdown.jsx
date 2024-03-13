// 1. Create a dropdown with objects from Jsonfile
// 2. create a onChange function on the dropdown
import { useState } from "react";
import Persons from "../Data/Bobs.json";
import BobsInfoBox from "../BobsInfoBox/BobsInfoBox";

const BobsDropdown = () => {
  const [person, setPerson] = useState("");

  const handleChange = (event) => {
    const selectedPerson = event.target.value;
    setPerson(selectedPerson);
    console.log("Selected person :", selectedPerson);
  };

  const selectedPersonObj = Persons.find(
    (personObj) => personObj.name === person
  );

  return (
    <div>
      <label htmlFor='person-select'>Choose a person:</label>

      <select
        name='persons'
        id='person-select'
        onChange={handleChange}
        value={person}
      >
        <option value=''>--Please choose an option--</option>
        {Persons.map((person, index) => (
          <option key={index} value={person.firstname}>
            {person.firstname} {person.lastname}
          </option>
        ))}
      </select>
      {/*Display InfoBox if a selected team object exists*/}

      {selectedPersonObj && (
        <BobsInfoBox
          firstname={selectedPersonObj.firstname}
          lastname={selectedPersonObj.lastname}
          pant_color={selectedPersonObj.pant_color}
          favorite_food={selectedPersonObj.favorite_food}
          favorite_tool={selectedPersonObj.favorite_tool}
          pet={selectedPersonObj.pet}
          hobby={selectedPersonObj.hobby}
        />
      )}
    </div>
  );
};
export default BobsDropdown;
