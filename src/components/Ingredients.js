import { useState, useEffect } from "react";


const Ingredients = () => {

  const [Items, setItems] = useState([]);

  useEffect(()=> {
    fetchItems();
  }, []);

  const fetchItems = async() => {
    const data = await fetch("https://dummyjson.com/recipes");
    const jsonD = await data.json();

    console.log(jsonD);
    setItems(jsonD.recipes);
  }
  return ( Items.length === 0 ? <div>Loading...</div> : (

    <>
    <h1>Ingredients</h1>
    {Items.map((item, index) => (
      <div className="ingredients" key={index}>
        <h2>Dish Name: {item.name}</h2>
        <h3>Ingredients: {item.ingredients.join(", ")}</h3>
      </div>
    ))}
    </>
    
  ))
}

export default Ingredients;