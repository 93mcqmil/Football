import { useState } from "react";
import Teams from "../Data/Teams.json";
import InfoBox from "../InfoBox/InfoBox";

const Dropdown = () => {
  const [team, setTeam] = useState("");

  const handleChange = (event) => {
    const selectedTeam = event.target.value; // extract the selected team from the event
    setTeam(selectedTeam); // updates the state selectedTeam with the name of the selected team.
    console.log("Team clicked on:", selectedTeam);
  };

  //it's used to find the team object in the Teams array that matches the selected team name
  const selectedTeamObj = Teams.find((teamObj) => teamObj.name === team);

  return (
    <div>
      <label htmlFor='team-select'>Choose a team:</label>
      <select
        name='teams'
        id='team-select'
        onChange={handleChange} //Trigger handleChange() when selection changes
        value={team} // Bind the selected team state to the value of the select element
      >
        <option value=''>--Please choose an option--</option>

        {Teams.map(
          (
            Team,
            index // mapping over Teams array to generate option elements
          ) => (
            <option key={index} value={Team.name}>
              {Team.name}
            </option>
          )
        )}
      </select>
      {/*Display InfoBox if a selected team object exists*/}
      {selectedTeamObj && (
        <InfoBox
          name={selectedTeamObj.name}
          founded={selectedTeamObj.founded}
          trophies={selectedTeamObj.trophies}
          city={selectedTeamObj.city}
          manager={selectedTeamObj.manager}
          country={selectedTeamObj.country}
          homeground={selectedTeamObj.home_ground}
        />
      )}
    </div>
  );
};
export default Dropdown;
