// import Logo from "../assets/images.jpeg"; gives issue in parcel so use below one
const logo = new URL("../../assets/images.jpeg", import.meta.url).href;
// import logo from "../assets/images.jpeg";
import { useState} from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";


const Header = () => {
  const [toggleBtn, setToggleBtn] = useState(true);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  function handleClick() {
    setToggleBtn(!toggleBtn);
  }
  return (
  <div className="head_container justify-center flex">
    <img className="logo" alt="logo" src={logo} />
    <ul className="nav_list">
      <li><Link className="linktag" to="./">Home</Link></li>
      <li><Link className="linktag" to="./about">AboutUs</Link></li>
      <li><Link className="linktag" to="./contact">ContactUs</Link></li>
      <li><Link className="linktag" to="./grocery">Grocery</Link></li>
      <li><Link className="linktag" to="./cart">Cart({cartItems.length})</Link></li>
      <li className="login_btn " onClick={handleClick}>{toggleBtn ? "Login": "Logout"}</li>
    </ul>
  </div>
)}

export default Header;