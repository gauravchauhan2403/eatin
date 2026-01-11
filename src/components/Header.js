// import Logo from "../assets/images.jpeg"; gives issue in parcel so use below one
const logo = new URL("../../assets/images.jpeg", import.meta.url).href;
import { useState} from "react";
import { Link } from "react-router";

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState(true);

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
      <li>Cart</li>
      <button className="login_btn" onClick={handleClick}>{toggleBtn ? "Login": "Logout"}</button>
    </ul>
  </div>
)}

export default Header;