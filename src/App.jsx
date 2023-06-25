//css.3.3

import "./App.css";
import React, { lazy } from "react";

//pages
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Products = lazy(() => import("./pages/Products/Products"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Error = lazy(() => import("./pages/Error/Error"));
const SingleProduct = lazy(() => import("./pages/SingleProduct/SingleProduct"));

//  Routes , Route
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../GlobalStyle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Products from "./pages/Products/Products";

// import useUserContext from "./hooks/useUserContext";
import Login from "./components/Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./components/Loading/Loading";

function App() {
  // This will be used as a global style
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      helper: "#8490ff",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    },
    media: {
      mobile: "768px",
      tablet: "998px",
    },
  };

  //Check if the user exists [For login]
  const checkLoginStatus = async() => {
    let user = await auth.currentUser;
    return user
  }
  const [user, setUser] = useState(checkLoginStatus);
  useEffect( () => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <React.Suspense fallback={Loading()}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/SingleProduct/:id" element={<SingleProduct />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </React.Suspense>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
