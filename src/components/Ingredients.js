import { useState, useEffect } from "react";
import useIngredientMenu from "../utils/useIngredientMenu";


const Ingredients = () => {
  let Items = useIngredientMenu();  
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