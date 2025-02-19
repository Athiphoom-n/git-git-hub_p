import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { BsBag } from "react-icons/bs";
import Menu from "../components/Menu";

const DaschBord = () => {
  const { Cart } = useContext(CartContext);
  const { itemAmount } = useContext(CartContext);

  const menu = [
    {id:1,name:"user"},
    {id:2,name:"cart"},
    {id:3,name:"mark"},
    {id:4,name:"history"},
    {id:5,name:"payment"},
    {id:6,name:"track"},
  ]
  console.log(menu)

  return (
    <div className="flex h-screen bg-amber-50 ">
      <div className="flex-row w-full bg-white top-0 h-full shadow-xl md:w-[25vw] xl:max-w-[25vw] py-4 px-4 lg:px-[35px]">
        <div className="w-full h-20 flex justify-center items-center border-b mb-5">LOGO</div>
        <div className="h-10">menu</div>
        <div className="mb-5">
        {menu.map((menu) => {
              return <Menu menu={menu} key={menu.id} />;
            })}
        </div>
      </div>
      <div className="flex-1 flex flex-col px-30 py-4 gap-4">
        <div className="w-full flex justify-between items-center h-20 bg-none shadow-xl rounded-2xl p-3 bg-white">
            <div>Search</div>
            <div className="flex gap-3">
                <div>
                    Profile
                </div>
                <div
                        className="cursor-pointer flex relative"
                      >
                        <BsBag className="text-2xl" />
                        <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                          {itemAmount}
                        </div>
                      </div>
            </div>
        </div>
        <div>CART</div>
        <div className="container mx-auto w-full h-1/2 overflow-x-auto shadow-xl px-20 bg-white">
          <div className="grid grid-row-1 max-w-sm mx-auto md:max-w-none md:mx-0">
            {Cart.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaschBord;
