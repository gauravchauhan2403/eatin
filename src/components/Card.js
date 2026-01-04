// const CardComponent = ({resData}) => {     /** this is destructuring on the fly */
const CardComponent = (props) => {
  const {resData} = props;              /**destructuring of props object, here resData is itself a object */

  return (
  <div className="card">
    <img className="card_img" alt="foodImg" src ={resData.img} />
    <h3>{resData.resname}</h3>
    <h3>{resData.cusine.join(",")}</h3>
    <h4>{resData.avgRating} stars</h4>
    <h4>{resData.time} minutes</h4>
  </div>
  )
}

export default CardComponent;