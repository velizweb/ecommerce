import React, { useEffect } from "react";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { mockData } from "../assets/mockData";


const Shop = () => {

     const dispatch = useDispatch();
      const products = useSelector((state) => state.products);
    
      useEffect(() => {
        dispatch(setProducts(mockData));
      }, []);

  return (
    <div className="container mx-auto py-2 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {products.products.map((product, idx) => (
          <ProductCard product={product} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
