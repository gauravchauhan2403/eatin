import React from "react";
import ReactDOM from "react-dom/client";
// import Logo from "../assets/images.jpeg"; gives issue in parcel so use below one
const logo = new URL("../assets/images.jpeg", import.meta.url).href;
const FoodImg = new URL("../assets/food1.jpeg", import.meta.url).href;

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

const CardComponent = () => (
  <div className="card">
    <img className="card_img" alt="foodImg" src ={FoodImg} />
    <h3>Veg Thali</h3>
    <h3>Asian Chinese Continental</h3>
    <h4>4.3 stars</h4>
    <h4>25 minutes</h4>
  </div>
)

const Body = () => {
  return (
    <div className="body_container">
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
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