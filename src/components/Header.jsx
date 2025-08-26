
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FilterContext } from "../context/FilterContext";

export default function Header(){
  const { cart } = useContext(CartContext);
  const { query, setQuery } = useContext(FilterContext);

  return (
    <header className="bg-white shadow px-6 py-4 flex items-center gap-4">
      <div className="text-xl font-bold">Logo</div>
      <div className="flex-1">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search for products..." className="w-full border rounded px-3 py-2" />
      </div>
      <nav className="flex items-center gap-4">
        <Link to="/cart" className="relative">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Cart</button>
          {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">{cart.length}</span>}
        </Link>
        <div className="w-8 h-8 bg-gray-200 rounded-full" title="Profile"/>
      </nav>
    </header>
  );
}
