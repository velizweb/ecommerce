import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import OrderConfirmation from "./pages/OrderConfirmation";
import FilterData from "./pages/FilterData";
import Sidebar from "./components/Sidebar";

function App() {
  const [order, setOrder] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <BrowserRouter>
      <Navbar setShowSidebar={setShowSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
        <Route
          path="/order-confirmation"
          element={<OrderConfirmation order={order} />}
        />
        <Route path="/filter-data" element={<FilterData />} />
      </Routes>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
