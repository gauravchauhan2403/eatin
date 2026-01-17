import { useContext } from "react";
import UserContext from "../utils/UserContext";

// const CardComponent = ({resData}) => {     /** this is destructuring on the fly */
const CardComponent = (props) => {
  const {resData} = props;              /**destructuring of props object, here resData is itself a object */

  const { userLoggedIn } = useContext(UserContext);


  return (
  <div className="card">
    <img className="card_img" alt="foodImg" src ={resData.image} />
    <h3>{resData.name}</h3>
    <h3>{resData.cuisine}</h3>
    {/* <h3>{resData.cusine.join(",")}</h3> */}
    <h4>{resData.rating} stars</h4>
    <h4>{resData.prepTimeMinutes} minutes</h4>
    <h4>{userLoggedIn}</h4>
  </div>
  )
}

// higher order component (Pure function), it enhances the component without modifying it.
export const withPromotedCardComp = (CardComponent) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-1 m-2 bg-black text-white "> Promoted </label>
        <CardComponent {...props} />
      </div>
    );
  };
};

export default CardComponent;