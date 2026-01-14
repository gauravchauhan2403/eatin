import { useState, useEffect } from "react";

const useIngredientMenu = () => {

  const [Items, setItems] = useState([]);

  useEffect(()=> {
    fetchItems();
    // need to remove this with clearInterval as it will blow up our app,
    //  as timer will be recalled after every render and will not ABORT.
    const timer = setInterval(()=>{
      console.log("set interval of ingredients")
    }, 1000);

    // this return is used to terminate the timer as it will be called just before component is unmounting.
    return () => {
      clearInterval(timer)
      console.log("timer is aborted");
    };
  }, []);

  const fetchItems = async() => {
    const data = await fetch("https://dummyjson.com/recipes");
    const jsonD = await data.json();

    console.log(jsonD);
    setItems(jsonD.recipes);
  }


  return Items;
}

export default useIngredientMenu;