const InfoBox = ({
  name,
  founded,
  trophies,
  city,
  manager,
  country,
  homeground,
}) => {
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
