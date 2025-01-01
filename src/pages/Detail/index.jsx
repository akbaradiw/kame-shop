import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { FaStar } from "react-icons/fa";
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
      <div className="py-40 px-6 md:px-16 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            src={detail.image}
            alt="Product"
            className="w-60 h-60 md:w-80 md:h-80"
          />
        </div>

        <div className="pt-4 md:pt-10">
          <button className="text-sm md:text-lg bg-emerald-600 px-4 py-2 rounded-md font-medium text-zinc-100 mt-2">
            #{detail.category}
          </button>
          <div className="flex pt-4 gap-2">
            <FaStar className=" lg:text-lg md:text-base text-sm text-yellow-400" />
            <FaStar className=" lg:text-lg md:text-base text-sm text-yellow-400" />
            <FaStar className=" lg:text-lg md:text-base text-sm text-yellow-400" />
            <FaStar className=" lg:text-lg md:text-base text-sm text-yellow-400" />
          </div>
          <h1 className="text-lg md:text-xl pt-3 font-bold text-emerald-600">
            {detail.title}
          </h1>
          <p className="text-sm md:text-base text-emerald-600 mt-3">
            {detail.description}
          </p>
          <h2 className="text-base md:text-lg font-medium text-blue-600 mt-2">
            ${detail.price}
          </h2>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Detail;
