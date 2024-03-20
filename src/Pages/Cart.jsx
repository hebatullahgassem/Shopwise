import { useContext } from "react";
import { MyContext } from "../context/Context";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, setCartItems } = useContext(MyContext);
  let totalPrice = 0;

  function handleDelete(deleteItem) {
    const newItems = cartItems.filter((item) => item !== deleteItem);
    setCartItems(newItems);
  }

  let navigate = useNavigate();
  function handleCheckout() {
    navigate("/");
  }

  return (
    <>
      <h1 className="text-center font-bold mt-16 text-2xl text-[#FF324D]">
        Your Cart
      </h1>
      <div className="mt-12 ms-64 min-h-[207px]">
        {cartItems.map((item) => (
          <div className="flex gap-10 border-b-2 border-slate-200 shadow-sm w-2/3 p-3">
            <img src={item.image} className="h-20 w-20" />
            <div className="ms-12 w-96">
              <h1 className="h-6 overflow-hidden mb-3">{item.title}</h1>
              <h1 className="font-bold">${item.price}</h1>
            </div>
            <div className="flex mt-8 rounded-md w-15 font-semibold text-sm h-5 gap-2 border border-slate-300">
              <button className="text-white bg-slate-300 w-[15px]">-</button>
              <p className="font-semibold">1</p>
              <button className="text-white bg-slate-300 w-[15px]">+</button>
            </div>
            <button
              onClick={() => handleDelete(item)}
              className="ms-auto text-xl text-[#FF324D] cursor-pointer"
            >
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-20 mb-10 ms-96 mt-10">
        <div className="flex gap-5 mt-3">
          <h1 className="font-bold text-lg text-[#FF324D]">Subtotal: </h1>
          <p className="font-semibold">{totalPrice}</p>
        </div>
        <button
          onClick={handleCheckout}
          className="bg-[#FF324D] text-center border border-[#FF324D] hover:text-[#FF324D] ms-4 hover:bg-white border cursor-pointer rounded-3xl p-2 mt-2 text-white text-sm text-center ps-8 pe-8"
        >
          Checkout
        </button>
      </div>
    </>
  );
}

export default Cart;
