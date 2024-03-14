// 1. Create a dropdown with objects from Jsonfile
// 2. create a onChange function on the dropdown
import { useState } from "react";
import Persons from "../Data/Bobs.json";
import BobsInfoBox from "../BobsInfoBox/BobsInfoBox";

const BobsDropdown = () => {
  const [person, setPerson] = useState("");

  const handleChange = (event) => {
    const selectedPerson = event.target.value; //gets value from the option that was selected
    setPerson(selectedPerson); //updates person state with the value of d selected person
    console.log("Selected person :", selectedPerson);
  };

  //find method searches the first name to see if it matches the selected person
  const selectedPersonObj = Persons.find(
    (personObj) => personObj.firstname === person
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
        <option value=''>--Please choose an option--</option> // mapping throu
        the json array
        {Persons.map((person, index) => (
          <option key={index} value={person.firstname}>
            {person.firstname} {person.lastname}
          </option> // mapping throu the json array
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
