import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { MyContext } from "../context/Context";

function Navbar() {
  const { cartItems } = useContext(MyContext);

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
        <li className="relative flex flex-col items-center text-left ms-[400px] mt-1 cursor-pointer">
          <button className="hover:text-[#FF324D]">
            <NavLink className="flex relative" to="cart">
              <IoCartOutline className="text-lg" />
              <span className="text-[11px] absolute right-0 left-2 bottom-2 bg-[#FF324D] rounded-lg px-[2px] h-4 w-4 text-white">
                {cartItems.length}
              </span>
            </NavLink>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
