import { useState } from "react";
import Teams from "../Data/Teams.json";
import InfoBox from "../InfoBox/InfoBox";

const Dropdown = () => {
  const [team, setTeam] = useState("");

  const handleChange = (event) => {
    const selectedTeam = event.target.value;
    setTeam(selectedTeam); // Update the Team state
    console.log("Team clicked on:", selectedTeam);
  };

  const selectedTeamObj = Teams.find((teamObj) => teamObj.name === team);

  return (
    <div>
      <label htmlFor='team-select'>Choose a team:</label>

      <select
        name='teams'
        id='team-select'
        onChange={handleChange}
        value={team}
      >
        <option value=''>--Please choose an option--</option>

        {Teams.map((Team, index) => (
          <option key={index} value={Team.name}>
            {Team.name}
          </option>
        ))}
      </select>
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
