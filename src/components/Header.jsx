import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import { BsBag } from "react-icons/bs";
import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
    const [isActive, setIsActive] = useState(false)
  const { IsOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        window.scrollY < 60 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex items-center justify-between  h-full">
      <Link to={"/"}>
        <div>
          <img className="w-[40px]" src={Logo} alt="" />
        </div>
      </Link>
      <div
        onClick={() => setIsOpen(!IsOpen)}
        className="cursor-pointer flex relative"
      >
        <BsBag className="text-2xl" />
        <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
          {itemAmount}
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
