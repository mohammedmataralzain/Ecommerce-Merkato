// React and react router
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import app and css
import App from "./App.jsx";
import "./index.css";
// context providers
import { AppProvider } from "./context/productcontext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import { FilterContextProvider } from './context/filterContext.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>
);
