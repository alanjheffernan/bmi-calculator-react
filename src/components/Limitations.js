import React from "react";
import LimitationsCard from "./LimitationsCard";
import genderIcon from "../assets/images/icon-gender.svg";
import ageIcon from "../assets/images/icon-age.svg";
import muscleIcon from "../assets/images/icon-muscle.svg";
import pregnancyIcon from "../assets/images/icon-pregnancy.svg";
import raceIcon from "../assets/images/icon-race.svg";

const Limitations = () => {
  return (
    <section className="my-[72px]">
      <div>
        <div className="flex flex-col items-center justify-center gap-8 p-6">
          <h3 className="text-3xl font-semibold text-dark-blue ">
            Limitations of BMI
          </h3>
          <p className="text-center text-dark-electric-blue">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center">
        <LimitationsCard
          icon={genderIcon}
          heading="Gender"
          text="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
          
        />
        <LimitationsCard
          icon={ageIcon}
          heading="Age"
          text="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
         
        />
        <LimitationsCard
          icon={muscleIcon}
          heading="Muscle"
          text="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
        />

        <LimitationsCard
          icon={pregnancyIcon}
          heading="Pregrancy"
          text="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
        />
        <LimitationsCard
          icon={raceIcon}
          heading="Race"
          text="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
        />
      </div>
    </section>
  );
};

export default Limitations;
