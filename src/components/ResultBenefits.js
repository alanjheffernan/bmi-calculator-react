import React from "react";
import eatingIcon from "../assets/images/icon-eating.svg";
import exerciseIcon from "../assets/images/icon-exercise.svg";
import sleepIcon from "../assets/images/icon-sleep.svg";
import ResultsBenefitCard from "./ResultsBenefitCard";

const ResultBenefits = () => {
  return (
    <section className="from-second-top-left to-second-bottom-right bg-gradient-to-br py-14 lg:flex lg:mx-6 lg:rounded-2xl lg:flex-row">
      <ResultsBenefitCard
        icon={eatingIcon}
        heading={"Healthy eating"}
        text={
          "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
        }
      />
      <ResultsBenefitCard
        icon={exerciseIcon}
        heading={"Regular exercise"}
        text={
          "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
        }
      />
      <ResultsBenefitCard
        icon={sleepIcon}
        heading={"Adequate sleep"}
        text={
          "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
        }
      />
    </section>
  );
};

export default ResultBenefits;
