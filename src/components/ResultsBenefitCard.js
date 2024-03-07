import React from 'react';

const ResultsBenefitCard = ({ icon, heading, text }) => {
    return (
        <div className=" flex flex-col md:flex-row lg:flex-col lg:items-start md:gap-6 md:items-center md:mx-10 mx-6 mb-10">
        <div>
          <img src={icon} alt="eatingIcon" className="mb-8 md:mb-0 h-16 w-16" />
        </div>
        <div>
          <h4 className="pb-6 text-2xl font-semibold text-dark-blue">
            {heading}
          </h4>
          <p className="leading-normal text-dark-electric-blue">
            {text}
          </p>
        </div>
      </div>
    );
};

export default ResultsBenefitCard;