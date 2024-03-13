// Create a Infobox for the different properties of the Jsonfile

//  //What is being displayed at the webpage! we also export Infobox and import it at the
// Dropdown function

const BobsInfoBox = ({
  firstname,
  lastname,
  pant_color,
  favorite_food,
  favorite_tool,
  pet,
  hobby,
}) => {
  return (
    <>
      <div>
        <h3>Builder</h3>
        <p>
          Name: {firstname},<br />
          Lastname: {lastname}, <br />
          Pant color: {pant_color}, <br />
          Favorite food: {favorite_food}, <br />
          Favorite tool:{favorite_tool}, <br />
          Pet:{pet}, <br />
          Hobby: {hobby}
        </p>
      </div>
    </>
  );
};
export default BobsInfoBox;
