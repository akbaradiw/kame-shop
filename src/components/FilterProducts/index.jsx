import React from "react";
import "./style.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const FilterProducts = ({handleSubmit, name, setName, category, setCategory, price, setPrice, handleReset, filter}) => {
    return (
            <div className="lg:mx-40 mx-4 rounded-md bg-zinc-100">
               <form
                 className="flex flex-wrap gap-4 m-1 p-3 lg:m-4 lg:p-4 justify-center"
                 onSubmit={handleSubmit}
               >
                 <input
                   className="w-full sm:w-auto md:flex-1 p-2 border rounded-md"
                   type="text"
                   placeholder="Search by name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                 />
                 <select
                   className="w-full sm:w-auto text-emerald-600 font-semibold md:flex-1 p-2 border rounded-md"
                   value={category}
                   onChange={(e) => setCategory(e.target.value)}
                 >
                   <option value="">Category</option>
                   <option value="men's clothing">Men's Clothing</option>
                   <option value="jewelery">Jewelery</option>
                   <option value="electronics">Electronics</option>
                   <option value="women's clothing">Women's Clothing</option>
                 </select>
                 <select
                   className="w-full sm:w-auto md:flex-1 p-2 border text-emerald-600 font-semibold rounded-md"
                   value={price}
                   onChange={(e) => setPrice(e.target.value)}
                 >
                   <option value="">Price</option>
                   <option value="0-50">0-50</option>
                   <option value="51-100">51-100</option>
                   <option value="101-200">101-200</option>
                   <option value="201-300">201-300</option>
                 </select>
                 <div className="flex gap-2">
                   <button
                     className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
                     type="submit"
                   >
                     <FaRegCheckCircle className="lg:text-2xl md:text-xl" />
                   </button>
                   {filter && (
                     <button
                       className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
                       type="button"
                       onClick={handleReset}
                     >
                       <GrPowerReset className="lg:text-2xl md:text-xl" />
                     </button>
                   )}
                 </div>
               </form>
             </div>
    );
};

export default FilterProducts;