// import Logo from "../assets/images.jpeg"; gives issue in parcel so use below one
const logo = new URL("../../assets/images.jpeg", import.meta.url).href;
import { useState} from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";


const Header = () => {
  const [toggleBtn, setToggleBtn] = useState(true);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  function handleClick() {
    setToggleBtn(!toggleBtn);
  }
  return (
  <div className="head_container">
    <img className="logo" alt="logo" src={logo} />
    <ul className="nav_list">
      <li><Link className="linktag" to="./">Home</Link></li>
      <li><Link className="linktag" to="./about">AboutUs</Link></li>
      <li><Link className="linktag" to="./contact">ContactUs</Link></li>
      <li><Link className="linktag" to="./grocery">Grocery</Link></li>
      <li><Link className="linktag" to="./cart">Cart({cartItems.length})</Link></li>
      <button className="login_btn" onClick={handleClick}>{toggleBtn ? "Login": "Logout"}</button>
    </ul>
  </div>
)}

export default Header;