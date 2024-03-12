import "./InfoBox.css";

//This is the infoBox with the different property of the json file
const InfoBox = ({
  name,
  founded,
  trophies,
  city,
  manager,
  country,
  homeground,
}) => {
  //What is being displayed at the webpage! we also export Infobox and import it at the
  // Dropdown function
  return (
    <>
      <div className='wrapper'>
        <h3>Team</h3>
        <p>
          Name: {name}
          <br />
          Founded: {founded} <br />
          Trophies: {trophies} <br />
          City: {city} <br />
          Manager: {manager} <br />
          Country: {country} <br />
          Homeground: {homeground} <br />
        </p>
      </div>
    </>
  );
};
export default InfoBox;
