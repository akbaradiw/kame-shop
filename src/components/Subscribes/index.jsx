import React from "react";
const Subscribes = () => {
  return (
    <div className="pt-10 pb-4  bg-emerald-600">
      <div>
        <h1 className="text-2xl  font-bold text-center  text-zinc-100">
          Subscribe to our newsletter to receive updates about the products and
          enjoy awesome gifts!
        </h1>
      </div>
      <div className="flex justify-center mt-4">
        <input type="text" className="w-1/2 py-2 px-4 rounded-md" placeholder="Enter your email" />
      </div>
      <div className="flex justify-center pt-4">
      <button className="bg-zinc-100 text-emerald-600 py-2 px-4 font-bold rounded-md hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribes;
