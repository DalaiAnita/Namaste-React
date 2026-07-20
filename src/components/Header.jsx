import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/hooks/useOnlineStatus";

const Header = () => {
const [btnName, setBtnName] = useState("Login")

const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-50 shadow-md">
      <div className="logo-containers">
        <img
          className="w-20"
          src={LOGO_URL}
          alt="good food"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex justify-between p-4 m-4">
           <li className="px-4">
            Online Status: {onlineStatus ? "✅" : "🔴" }
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button className="login-btn" onClick={() => {
            (btnName === "Login") ? setBtnName("Logout") : setBtnName("Login")
          } }>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;