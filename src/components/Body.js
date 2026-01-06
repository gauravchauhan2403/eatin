import CardComponent from "./Card";
// import resData from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {

  let [filteredResData, setFilterResData] = useState([]);
  let [count, setCount] = useState(true);
  let [listOfRestraunt, setListOfRestraunt] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() =>  {
    const data = await fetch("https://dummyjson.com/recipes");
    const jsonData = await data.json();
    // console.log(jsonData)

    setListOfRestraunt(jsonData.recipes);
    setFilterResData(jsonData.recipes);

  }

  return (
    <>
      <button onClick={(count) ? (
        () => {           // for filteringout data above rating 4
        const filterData = listOfRestraunt.filter((res) => res.rating > 4);
        setListOfRestraunt(filterData);
        setCount(false);
        }) : (
          () => { 
          setListOfRestraunt(filteredResData);
          setCount(true);
        })
      } 
        style={{ border: "1px solid white", cursor: "pointer"}}
      >
        {(count) ? "Best restraunt" : "All restraunt"}
      </button>
      <div className="body_container">
        {listOfRestraunt.map((restraunt) => (
          <CardComponent key={restraunt.id} resData={restraunt} />
        ))}  
      </div>
    </>
  )
}

export default Body;