import { createContext, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}
}

export function ShopContextProvider(props){
  const [cartItems, setCartItems] = useState({});

  return(
    <>
    <ShopContext.Provider>{props.children}</ShopContext.Provider>
    </>
  );
}
