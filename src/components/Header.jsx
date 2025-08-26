
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FilterContext } from "../context/FilterContext";
import { useNavigate } from "react-router-dom";

export default function Header(){
  const { cart } = useContext(CartContext);
  const { query, setQuery } = useContext(FilterContext);
  const navigate =  useNavigate()

  return (
    <header className="bg-blue-500 shadow px-6 py-4 grid grid-cols-3 items-center">
 
    <div 
      onClick={() => navigate("/")} 
      className="text-xl font-bold cursor-pointer"
    >
      Logo
    </div>
  
 
    <div className="flex justify-center">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for products..."
        className="w-full max-w-md border rounded px-3 py-2"
      />
    </div>
  
 =
    <nav className="flex items-center justify-end gap-4">
      <Link to="/cart" className="relative">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          🛒 Cart
        </button>
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
            {cart.length}
          </span>
        )}
      </Link>
    </nav>
  </header>
  
  );
}
