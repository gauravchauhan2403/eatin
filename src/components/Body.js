import CardComponent from "./Card";
import Shimmer from "./Shimmer";
// import resData from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  // to maintain the original state
  const [filteredResData, setFilterResData] = useState([]);
  // let [count, setCount] = useState(true);
  const [listOfRestraunt, setListOfRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  // if(listOfRestraunt.length === 0){
  //   // return <h1>Loading....</h1>;
  //   // apart from using loader compnent we will use shimmer UI or wireframe kinda componet for better UX.
  //   return <Shimmer />
  // }

  // condtional rendering
  return listOfRestraunt.length === 0 ? <Shimmer /> : (
    <>
    <input
      type="text"
      className="input_search"
      value={searchText}
      onChange={(e)=>{setSearchText(e.target.value)}}
    />
    <button className="search_Button" 
      onClick={() => { 
        const filteredResData = listOfRestraunt.filter((res) =>
          res.name.toLowerCase().includes(searchText.toLowerCase())
        );
        console.log(filteredResData)
        console.log(searchText)
        setFilterResData(filteredResData)}}
      style={{ border: "1px solid white", cursor: "pointer"}} >
      Search
    </button>
      {/* <button onClick={(count) ? (
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
      </button> */}
      <div className="body_container">
        {filteredResData.map((restraunt) => (
          <CardComponent key={restraunt.id} resData={restraunt} />
        ))}  
      </div>
    </>
  )
}

export default Body;