import React, { createContext, useState, useEffect } from 'react'

export const MyContext = createContext();

export const Context = ({children}) => {
  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <MyContext.Provider value={{products, cartItems, setCartItems, addToCart}}>
      {children}
    </MyContext.Provider>
  )
}

