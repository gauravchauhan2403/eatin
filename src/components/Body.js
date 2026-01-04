import CardComponent from "./Card";
import resData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [filteredResData, setFilterResData] = useState(resData);
  let [count, setCount] = useState(true);

  return (
    <>
      <button onClick={(count) ? (
        () => {           // for filteringout data above rating 4
        const filterData = filteredResData.filter((res) => res.avgRating > 4);
        setFilterResData(filterData);
        setCount(false);
        }) : (
          () => { 
          setFilterResData(resData);
          setCount(true);
        })
      } 
        style={{ border: "1px solid white", cursor: "pointer"}}
      >
        {(count) ? "Best restraunt" : "All restraunt"}
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