// Create a Infobox for the different properties of the Jsonfile

//  //What is being displayed at the webpage! we also export Infobox and import it at the
// Dropdown function
import "./BobsInfoBox.css";
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
          Name: <span>{firstname},</span>
          <br />
          Lastname: <span>{lastname},</span> <br />
          Pant color: <span>{pant_color},</span> <br />
          Favorite food: <span>{favorite_food},</span> <br />
          Favorite tool: <span>{favorite_tool},</span> <br />
          Pet: <span>{pet},</span> <br />
          Hobby: <span>{hobby}</span>
        </p>
      </div>
    </>
  );
};
export default BobsInfoBox;
