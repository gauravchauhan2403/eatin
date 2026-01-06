// const CardComponent = ({resData}) => {     /** this is destructuring on the fly */
const CardComponent = (props) => {
  const {resData} = props;              /**destructuring of props object, here resData is itself a object */

  return (
  <div className="card">
    <img className="card_img" alt="foodImg" src ={resData.image} />
    <h3>{resData.name}</h3>
    <h3>{resData.cuisine}</h3>
    {/* <h3>{resData.cusine.join(",")}</h3> */}
    <h4>{resData.rating} stars</h4>
    <h4>{resData.prepTimeMinutes} minutes</h4>
  </div>
  )
}

export default CardComponent;