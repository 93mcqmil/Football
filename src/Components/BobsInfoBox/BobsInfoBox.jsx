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
        <h1>Builder Bob</h1>
        <p>
          Name: {firstname}, lastname: {lastname}, pant color: {pant_color},
          favorite food: {favorite_food}, favorite tool:{favorite_tool} pet:
          {pet}, hobby: {hobby}
        </p>
      </div>
    </>
  );
};
export default BobsInfoBox;
