import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const FilterData = () => {
  const filteredProducts = useSelector((state) => state.products.filteredData);

  return (
    <div className="container mx-auto py-2 px-4 md:px-16 lg:px-24">
      {filteredProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {filteredProducts.map((product, idx) => (
              <ProductCard product={product} key={idx} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/lo-siento-articulo-no-encontrado-3328225-2809510.png?f=webp"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default FilterData;
