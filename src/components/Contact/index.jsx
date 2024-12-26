import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div className="p-4 md:p-8 lg:p-16">
      <div className="flex justify-around md:text-left">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Contact
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptate. Soluta, quibusdam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, voluptate. Soluta, quibusdam. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.
          Soluta, quibusdam.
        </p>
      </div>
    </div>
  );
};

export default Contact;
