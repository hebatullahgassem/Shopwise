import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex p-2 shadow fixed top-0 right-0 left-0 bg-white">
      <img className="w-[130px] ms-[100px]" src="logo.png" alt="logo" />
      <ul className="flex mx-auto mt-1">
        <li className="ms-[200px] cursor-pointer hover:text-[#FF324D]">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="ms-[100px] cursor-pointer hover:text-[#FF324D]">
          <NavLink to="login">Login</NavLink>
        </li>
        <li className="ms-[400px] cursor-pointer hover:text-[#FF324D]">
          <NavLink to="cart"><FontAwesomeIcon icon={faCartShopping} /></NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
