import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const { image, title, description, price } = product;

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }

    fetchProduct();
  }, [id]);

  return (
    <div className="mt-20 ms-auto me-[270px] mb-[15px] shadow-lg w-1/2 h-[370px] p-8 flex flex-col justify-center">
      <img
        src={image}
        alt={title}
        className="max-h-[150px] max-w-[100px] mb-3 ms-auto me-48"
      />
      <div className="text-center">
        <h1 className="font-semibold text-lg mb-3">{title}</h1>
        <p className="text-sm mb-1">{description}</p>
        <h2 className="font-bold text-sm text-[#FF324D]">${price}</h2>
      </div>
      <button className="bg-[#FF324D] border border-[#FF324D] hover:text-[#FF324D] hover:bg-white border cursor-pointer rounded-3xl p-2 mt-2 text-white text-sm text-center ps-8 pe-8">
                  <FontAwesomeIcon className="w-3 pe-2" icon={faCartShopping} />
                  Add To Cart
      </button>
    </div>
  );
}

export default Product;
