import CardComponent from "./Card";
import resData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [filteredResData, setFilterResData] = useState(resData)

  return (
    <>
      <button onClick={ () => {           // for filteringout data above rating 4
        const filterData = filteredResData.filter((res) => res.avgRating > 4);
        setFilterResData(filterData);
        }} 
        style={{ border: "1px solid white", cursor: "pointer"}}
      >
        Best Restraunt
      </button>
      <div className="body_container">
        {filteredResData.map((restraunt) => (
          <CardComponent key={restraunt.id} resData={restraunt} />
        ))}  
      </div>
    </>
  )
}

export default Body;