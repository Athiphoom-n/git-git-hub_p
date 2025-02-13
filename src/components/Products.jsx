import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

function Products({ products }) {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = products;

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-120 transiton duration-300"
              src={image}
              alt=""
            />
          </div>
          {/* button */}
          <div className="absolute top-3 right-3 p-1 flex flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={() => addToCart(products)}>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500 ">
                <BsPlus className="text-2xl" />
              </div>
              </button>
              <Link
                to={`/product/${id}`}
                className="flex justify-center items-center bg-white w-12 h-12 text-primary drop-shadow-xl"
              >
                <BsEyeFill />
              </Link>
            
          </div>
        </div>
      </div>
      <div>
        <div>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div>${price}</div>
      </div>
    </div>
  );
}

export default Products;
