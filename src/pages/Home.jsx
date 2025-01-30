import React, { useEffect } from "react";
import { Categories, mockData } from "../assets/mockData";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);

  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            COMPRAR POR CATEGORIAS
          </div>
          <ul className="space-y-4 bg-gray-200 p-3 border">
            {Categories.map((category, idx) => (
              <li key={idx} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/753/286/non_2x/man-making-order-in-online-shop-horizontal-banner-with-copy-space-vector.jpg"
            alt=""
            className="w-full h-full"
          />
          <div className="absolute top-16 left-8 mt-8">
            {/* <p className="text-gray-600 mb-4">Code With Yousaf</p> */}
            <h2 className="text-3xl font-bold">BIENVENIDOS A E-SHOP </h2>
            <p className="text-xl mt-2.5 font-bold text-gray-800">
              MILLONES DE PRODUCTOS
            </p>
            <button
              className="bg-red-600 px-8 py-1.2 text-white mt-4 hover:bg-red-700 
            transform transition-transform duration-300 hover:scale-105"
            >
              COMPRAR AHORA
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />

      <div className="container mx-auto py-2">
        <h2 className="text-2xl font-bold mb-6 text-center">Top de Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.products.slice(0, 5).map((product, idx) => (
            <ProductCard product={product} key={idx} />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto py-2">
        <h2 className="text-2xl font-bold mb-6 text-center">Tienda</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.products.map((product, idx) => (
            <ProductCard product={product} key={idx} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Home;
