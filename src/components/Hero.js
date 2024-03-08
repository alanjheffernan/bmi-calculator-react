import React from "react";
import BmiCalculator from "./BmiCalculator";
import logo from "../assets/images/logo.svg";

const Hero = () => {
  return (
    <section className="relative">
      <div className="relative z-10 flex flex-col lg:flex-row">
        <div className="flex flex-col items-center justify-center px-6 py-8 pt-[75px] lg:items-start lg:basis-1/2 lg:justify-start lg:pl-[140px]">
          <img src={logo} alt="logo" className="h-10 w-10 lg:mb-[110px]" />
          <h1 className=" py-6 pb-6 text-center text-5xl font-semibold leading-[52px] text-dark-blue lg:pb-9 lg:text-left">
            Body Mass <br />
            Index <br className="md:hidden lg:hidden" />
            Calculator
          </h1>
          <p className="text-center leading-normal text-dark-electric-blue lg:text-left lg:pb-[120px]">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <div className=" lg:flex lg:justify-center lg:items-center lg:basis-1/2">
          <BmiCalculator/>
        </div>
      </div>
      <div className="absolute top-0 z-0 h-[70vh] w-full rounded-b-[35px] bg-gradient-to-br from-top-left to-bottom-right md:h-[80vh] lg:h-full lg:w-2/3" />
    </section>
  );
};

export default Hero;
