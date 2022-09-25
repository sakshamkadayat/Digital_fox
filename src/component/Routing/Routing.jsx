import React from "react";
import Navbar from "../Navbar";
import Home from "../Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Cart from "../Pages/Cart";
import Product from "../Pages/Product";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Out from "./Outlet/Out";

export function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Out></Out>}>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route path="/product" element={<Product></Product>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/contact" element={<Contact></Contact>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/register" element={<Register></Register>}></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
