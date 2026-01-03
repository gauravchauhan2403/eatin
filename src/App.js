import React from "react";
import ReactDOM from "react-dom/client";
// import Logo from "../assets/images.jpeg"; gives issue in parcel so use below one
const logo = new URL("../assets/images.jpeg", import.meta.url).href;
const FoodImg = new URL("../assets/food1.jpeg", import.meta.url).href;

const resData = [
{
    id: 1,
    resname: "shri Udupi",
    cusine: ["Breakfast", "south indian"],
    avgRating: 4.3,
    time: 25,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/5/1/0f2967df-1a30-46d2-a264-14c2d0d05e1b_0652be60-690b-4240-8dd8-62fce1b8c16b.jpg"
},
{
    id: 2,
    resname: "KFC",
    cusine: ["American", "Burger"],
    avgRating: 3.9,
    time: 35,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/12/27/19f2ed3b-5d6a-412c-940b-cff6fd5c3646_6bb2f3fc-dd26-4583-8e36-270c87ff7a2c.jpg"
},
{
    id: 3,
    resname: "Angara Restraunt",
    cusine: ["American", "Burger"],
    avgRating: 2.3,
    time: 45,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vrw13znshc5wvo1hdwx7"
},
{
    id: 4,
    resname: "Rameshwaram cafe",
    cusine: ["Breakfast", "South Indian", "lunch"],
    avgRating: 4.8,
    time: 25,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/7/28/4bcdb78a-fdd0-4fe3-ad0a-fd2519460f2b_ecc8e407-2131-4289-a8e5-09cc600c12f6.jpeg"
},
{
    id: 5,
    resname: "Aruki kitchen",
    cusine: ["Breakfast", "South Indian", "lunch"],
    avgRating: 4.1,
    time: 20,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/6/10/2d817b31-b8a0-44b7-a5bd-6c66dcd03b58_f1e5367a-62c0-496b-9be6-1ec6f78c7966.jpg"
},
{
    id: 6,
    resname: "Sharif bhai birayni",
    cusine: ["Lunch", "Briyani"],
    avgRating: 4.2,
    time: 38,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/watevctlyqwgjz0qkbr7"
},
{
    id: 7,
    resname: "Punjabi Rasoi",
    cusine: ["Lunch", "Dinner"],
    avgRating: 4.3,
    time: 25,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/s2tcja1qsmkhkxkcly7z"
},
{
    id: 8,
    resname: "Kerela",
    cusine: ["fish", "Lunch"],
    avgRating: 4.0,
    time: 25,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/6/10/2d817b31-b8a0-44b7-a5bd-6c66dcd03b58_f1e5367a-62c0-496b-9be6-1ec6f78c7966.jpg"
},
{
    id: 9,
    resname: "Best kitchen",
    cusine: ["Lunch", "South indian"],
    avgRating: 4.3,
    time: 25,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/7/28/4bcdb78a-fdd0-4fe3-ad0a-fd2519460f2b_ecc8e407-2131-4289-a8e5-09cc600c12f6.jpeg"
},
{
    id: 10,
    resname: "Chulha chauki",
    cusine: ["Lunch", "Dinner", "chats"],
    avgRating: 4.3,
    time: 45,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/7/23/41b57f0c-b8b3-4ae9-8eab-edfaf8217afe_14fd1d5a-a37a-4c34-af18-b9756b640ade.jpeg"
},
{
    id: 11,
    resname: "Desi thela",
    cusine: ["Fast food", "Snacks"],
    avgRating: 2.0,
    time: 25,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wfol02cizu1pb7mq6oxr"
},
{
    id: 12,
    resname: "Sagar Ratna",
    cusine: ["Breakfast", "Soth indian"],
    avgRating: 3.8,
    time: 25,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/05290256-23a1-4da2-807a-6bb7d38a4c7b_718106.jpg"
},
{
    id: 13,
    resname: "Meghana Biryani",
    cusine: ["Lunch", "Biryani"],
    avgRating: 4.3,
    time: 35,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xfuwmthwviffiivxtydm"
}
];

const Header = () => (
  <div className="head_container">
    <img className="logo" alt="logo" src={logo} />
    <ul className="nav_list">
      <li><input alt="Search something"/></li>
      <li>Search</li>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact us</li>
      <li>Cart</li>
    </ul>
  </div>
)

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

const Body = () => {
  return (
    <div className="body_container">
      {resData.map((restraunt) => (
        <CardComponent key={restraunt.id} resData={restraunt} />
      ))}  
    </div>
  )
}

const Footer = () => (
  <div className="footer_container">
    <ul className="footer_list">
      <li>Home</li>
      <li>Contact Us</li>
      <li>Address: building no ##, karnataka, Bnagalore 560048</li>
      <li>All rights reserved by EatIn.pvt.ltd</li>
    </ul>
  </div>
)


const Main = () => {
  return (
    <div className="main">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />)