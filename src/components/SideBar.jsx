import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import Login from "../page/Login/Login";

const SideBar = () => {
  const { IsOpen, handleClose } = useContext(SidebarContext);
  const { Cart, clearCart, total } = useContext(CartContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        IsOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex item-center justify-between py-6 boder-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center item-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col overflow-y-auto h-[640px] lg:h-[720px] overflow-x-hidden border-b">
        {Cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="w-full flex justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>${`${parseFloat(total).toFixed(2) }`}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link to='/' className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium">
            View Cart
        </Link >
        <Link to='/login' className="bg-black flex p-4 justify-center items-center text-white w-full font-medium">
            Checkout
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
