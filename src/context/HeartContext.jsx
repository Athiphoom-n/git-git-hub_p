import React,{ createContext, useState } from 'react'

export const HeartContext = createContext()

const HeartProvider = ({children}) => {

    const [heart,setHeart] = useState([])
    const addToHeart = (products) => {
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
    
      const removeFromHeart = (products) => {
        const newCart = Cart.filter((item) => {
          return item.id !== products.id;
        });
        setCart(newCart);
      };

  return (
    <HeartContext.Provider
    value={heart}
    >
        ({ children})
    </HeartContext.Provider>
  )
}

export default HeartProvider