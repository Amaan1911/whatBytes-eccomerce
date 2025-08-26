
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { FilterProvider } from "./context/FilterContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
