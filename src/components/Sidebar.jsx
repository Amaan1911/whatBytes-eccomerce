
import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export default function Sidebar({ categories }) {
  const { category, setCategory, priceRange, setPriceRange } = useContext(FilterContext);

  return (
    <aside className="space-y-6">
      <div className="card">
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="flex flex-col gap-2">
          {["All", ...categories].map(c => (
            <label key={c} className="flex items-center gap-2">
              <input type="radio" name="cat" checked={category===c} onChange={()=>setCategory(c)} />
              <span>{c}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="font-semibold mb-2">Price (max)</h3>
        <input type="range" min="0" max="1000" value={priceRange[1]} onChange={e => setPriceRange([0, Number(e.target.value)])} />
        <div className="text-sm mt-2">Up to ${priceRange[1]}</div>
      </div>
    </aside>
  );
}
