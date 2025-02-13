import React, { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [itemAmount, setItemAmount] = useState(0);
  const [Cart, setCart] = useState([]);
  const [total, setTotal] = useState([])

  useEffect(() => {
    if (Cart) {
      const amount = Cart.reduce((accumulator, cerrentItem) => {
        return accumulator + cerrentItem.amount;
      }, 0);
      setItemAmount(amount);  
    }
  }, [Cart]);

  useEffect(() => {
      const total = Cart.reduce((accumulator, cerrentItem) => {
        return accumulator + cerrentItem.amount * cerrentItem.price;
      }, 0);
      setTotal(total);  
  },);

  const addToCart = (products) => {
    const newItem = { ...products, amount: 1 };
    const cartItem = Cart.find((item) => {
      return item.id === products.id;
    });
    if (cartItem) {
      const newCart = [...Cart].map((item) => {
        if (item.id === products.id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...Cart, newItem]);
    }
  };

  const removeFromcart = (products) => {
    const newCart = Cart.filter((item) => {
      return item.id !== products.id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    return setCart([]);
  };

  const increaseAmount = (products) => {
    const cartItem = Cart.find((item) => item.id === products.id);
    addToCart(cartItem, products.id);
  };

  const decreaseAmount = (products) => {
    const cartItem = Cart.find((item) => {
      return item.id === products.id;
    });
    if (cartItem) {
      const newCart = Cart.map((item) => {
        if (item.id === products.id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      return removeFromcart(products);
    }
  };

  return (
    <CartContext.Provider
      value={{
        Cart,
        addToCart,
        removeFromcart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
