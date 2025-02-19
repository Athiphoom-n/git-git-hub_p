import React, { useContext } from "react";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ProductContext } from "../../context/ProductContext";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  console.log(id);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loadind...
      </section>
    );
  }

  console.log(product);

  return (
    <div>
      <Header/>
      <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-1 justify-center mb-8 lg:mb-0">
              <img
                className="max-w-[200px] lg:max-w-sm"
                src={product.image}
                alt=""
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                {product.title}
              </h1>
              <div className="text-xl text-red-500 font-medium  mb-6">
                {product.price}
              </div>
              <p className="mb-8">{product.description}</p>
              <button
                onClick={() => addToCart(product, product.id)}
                className="bg-black py-4 px-8 text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <SideBar/>
      <Footer/>
    </div>
  );
};

export default ProductDetail;
