//css.3.3

import "./App.css";

//pages
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";

//  Routes , Route
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
