import React from "react";

const LimitationsCard = ({ icon, heading, text }) => {
  return (
    <div className="flex flex-col shadow-bottom-right p-6 m-6 rounded-2xl shadow-2xl md:w-[40%]">
      <div className="flex gap-4 pb-4">
        <img src={icon} alt={heading} className="h-8 w-8 " />
        <h2 className="font-semibold text-xl text-dark-blue">{heading}</h2>
      </div>

      <p className="leading-normal text-dark-electric-blue">{text}</p>
    </div>
  );
};

export default LimitationsCard;
