import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
const Detail = () => {
  const param = useParams();

  const [detail, setDetail] = useState({});

  const showDetail = () => {
    axios
      .get(`https://fakestoreapi.com/products/${param.id}`)

      .then((res) => {
        console.log(res.data);
        setDetail(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    showDetail();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-sm mx-auto bg-white border rounded-lg shadow-md overflow-hidden md:max-w-md lg:max-w-lg">
        <img
          src={detail.image}
          alt="Product"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h1 className="text-xl font-semibold text-gray-800">
            {detail.title}
          </h1>
          <h2 className="text-lg font-medium text-gray-600 mt-2">
            ${detail.price}
          </h2>
          <p className="text-gray-500 mt-3">{detail.description}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Detail;
