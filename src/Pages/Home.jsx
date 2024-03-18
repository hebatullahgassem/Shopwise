import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <h1 className="mt-20 mb-5 text-center font-bold text-2xl text-[#333333]">
        Exclusive Products
      </h1>
      <ul className="grid grid-cols-4 gap-6 p-5 ms-20 me-20 pb-28">
        {products.map((product) => {
          const { id, image, title, description, price } = product;
          return (
            <li
              className="border-slate-300 border rounded-md overflow-hidden h-[450px] shadow-md group"
              key={id}
            >
              <img
                src={image}
                className="max-h-[300px] h-full w-full duration-200 group-hover:brightness-50"
              />
              <div className="p-3 pb-4 text-center">
                <h1 className="font-semibold text-sm pb-2 h-5 overflow-hidden">
                  {title}
                </h1>
                <p className="font-bold text-xs text-[#FF324D] pb-1">
                  ${price}
                </p>
                <p className="text-xs h-10 overflow-hidden">{description}</p>
                <button className="bg-[#FF324D] border border-[#FF324D] hover:text-[#FF324D] hover:bg-white border cursor-pointer rounded-3xl p-2 mt-2 text-white text-sm text-center ps-8 pe-8">
                  <FontAwesomeIcon className="w-3 pe-2" icon={faCartShopping} />
                  Add To Cart
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
