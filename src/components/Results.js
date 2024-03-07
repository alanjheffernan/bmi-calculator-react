import React from "react";
import manEating from "../assets/images/image-man-eating.webp";
import curvedLineLeft from "../assets/images/pattern-curved-line-left.svg";

function Results() {
  return (
    <section className="md:flex md:flex-row pb-[72px] md:pb-[96px] lg:mt-16">
      <div className="md:basis-1/2">
        <img src={manEating} alt="man-eating" className="md:-ml-12" />
      </div>

      <div className=" px-6 pt-12 md:basis-1/2 md:px-12 lg:mr-[120px] lg:flex lg:flex-col">
        <div className="lg:self-end">
          <img
            src={curvedLineLeft}
            alt="curved-line-left"
            className="hidden lg:block	"
          />
        </div>
        <h3 className="pb-8 text-3xl font-semibold leading-9 text-dark-blue lg:text-5xl">
          What your BMI result means
        </h3>
        <p className="leading-normal text-dark-electric-blue lg:pb-6">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
}

export default Results;
