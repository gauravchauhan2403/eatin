// import Logo from "../assets/images.jpeg"; gives issue in parcel so use below one
const logo = new URL("../../assets/images.jpeg", import.meta.url).href;

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

export default Header;