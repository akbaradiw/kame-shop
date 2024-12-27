import React from "react";
import Navbar from "../../components/Navbar";
import ProductList from "../../components/ProductList";
import FilterProducts from "../../components/FilterProducts";
import Footer from "../../components/Footer";
import SearchProducts from "../../components/SearchProducts";

const Products = () => {
    return (
        <div>
            {/* <Navbar /> */}
            {/* <FilterProducts /> */}
            <ProductList />
            {/* <SearchProducts /> */}
            <Footer />
        </div>
    );
};

export default Products;