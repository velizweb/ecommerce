import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = ({setShowSidebar}) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const products = useSelector((state) => state.cart.products);
  const navigate =  useNavigate();
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const openSignup = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate('/filter-data')
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">e-SHOP</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar Producto"
              className="w-full border py-2 px-4"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-red-300"></FaSearch>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link className="relative" onClick={() => setShowSidebar(true)}>
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block"
            onClick={() => setIsModelOpen(true)}
          >
            Ingresar | Registro
          </button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 py-4 text-md font-bold">
        <Link to="/" className="hover:underline">
          Inicio
        </Link>
        <Link to="/shop" className="hover:underline">
          Tienda
        </Link>
        <Link to="/" className="hover:underline">
          Contacto
        </Link>
        <Link to="/" className="hover:underline">
          Nosotros
        </Link>
      </div>

      <Modal isOpen={isModelOpen} setOpen={setIsModelOpen}>
        {isLogin ? (
          <Login openSignup={openSignup} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
