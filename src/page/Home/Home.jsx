import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import Products from "../../components/Products";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

const Home = () => {
  const [filter1, setFilter] = useState({});
  const { products } = useContext(ProductContext);
  // console.log(products);

  const filteredProduct = products.filter((item) => {
    return (
      item.category === filter1.Cat || item.category === filter1.Cat2
    );
  });
  console.log(filteredProduct);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter1,
      [e.target.name]: value,
    });
  };
  console.log(filter1);

  const option = [
    {label : "electronics"},
    {label : "jewelery"},
    {label : "men's clothing"},
    {label : "women's clothing"},
  ]

  return (
    <div>
      <Header/>
      <Hero />
      <section className="p-16">
        <div clasName="container mx-auto">
          <div className="pb-7">
            <div className="w-full h-[40px] bg-none flex justify-between py-1 items-center">
              <div className="flex flex-row gap-x-2 justify-start">
                <p>Filter Product :</p>
                <div className="border-1">
                  <select
                    name="Cat"
                    className="w-[90px]"
                    onChange={handleFilters}
                  >
                    <option disabled>Category</option>
                    {option.map((option) => (
                      <option>{option.label}</option>
                    ))}
                  </select>
                </div>
                <div className="border-1">
                  <select
                    name="Cat2"
                    className="w-[90px]"
                    onChange={handleFilters}
                  >
                    <option disabled>Category</option>
                    {option.map((option) => (
                      <option>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProduct.map((products) => {
              return <Products products={products} key={products.id} />;
            })}
          </div>
        </div>
      </section>
      <SideBar/>
      <Footer />
    </div>
  );
};

export default Home;
