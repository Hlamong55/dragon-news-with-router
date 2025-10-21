import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-5">Find Us On</h2>
      <div className="join join-vertical w-full">
        <button className="btn bg-base-100 py-6 justify-start text-accent join-item"><FaFacebook size={20}/> Facebook</button>
        <button className="btn bg-base-100 py-6 justify-start text-accent join-item"><FaSquareXTwitter size={20}/> Twitter</button>
        <button className="btn bg-base-100 py-6 justify-start text-accent join-item"><FaInstagramSquare size={20}/> Instragram</button>
      </div>
    </div>
  );
};

export default FindUs;
