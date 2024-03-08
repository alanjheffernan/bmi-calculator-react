import { React, useState, useEffect } from "react";

const BmiCalculator = () => {
  const [unit, setUnit] = useState("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);

  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [stone, setStone] = useState(0);
  const [pounds, setPounds] = useState(0);

  const [bmiRange, setBmiRange] = useState([0, 0]);
  const [bmiCategory, setBmiCategory] = useState("");

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
    setBmi("");
    setHeight("");
    setWeight("");
  };

  const handleWeightChange = (e) => {
    const nextWeight = e.target.value;
    setWeight(nextWeight);
    console.log("weight - " + nextWeight);
  };

  const handleHeightChange = (e) => {
    const nextHeight = e.target.value;
    setHeight(nextHeight);
    console.log("height - " + nextHeight);
  };

  const handleFeetChange = (e) => {
    setFeet(Number(e.target.value));
  };

  const handleInchChange = (e) => {
    setInches(Number(e.target.value));
  };

  const handleStoneChange = (e) => {
    setStone(Number(e.target.value));
  };

  const handlePoundsChange = (e) => {
    setPounds(Number(e.target.value));
  };

  useEffect(() => {
    const calculateWeight = () => {
      const totalWeight = stone * 14 + pounds;
      setWeight(totalWeight || "");
    };

    calculateWeight();
  }, [stone, pounds]);

  useEffect(() => {
    const calculateHeight = () => {
      const totalInches = feet * 12 + inches;
      setHeight(totalInches || "");
      console.log("height inch - " + totalInches);
    };

    calculateHeight();
  }, [feet, inches]);

  useEffect(() => {
    const calculateBmi = () => {
      if (unit === "metric") {
        const metricBmi = weight / Math.pow(height / 100, 2);
        setBmi(metricBmi.toFixed(0));
        console.log("metric bmi - " + metricBmi);
      } else {
        const imperialBmi = (weight / Math.pow(height, 2)) * 703;
        setBmi(imperialBmi.toFixed(0));
        console.log("imperial bmi - " + imperialBmi);
      }
    };

    calculateBmi();
  }, [weight, height, unit]);

  useEffect(() => {
    const calculateBmiCategory = () => {
      setBmiCategory((prevCategory) => {
        if (bmi < 18.5) {
          return "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
          return "Healthy";
        } else if (bmi >= 25 && bmi < 29.9) {
          return "Overweight";
        } else if (bmi >= 30) {
          return "Obese";
        }

        return prevCategory;
      });

      console.log("bmi range - " + bmiCategory);
    };

    calculateBmiCategory();
  }, [bmi, bmiCategory]);

  useEffect(() => {
    const calculateHealthyWeightRange = () => {
      if (unit === "metric") {
        const minWeight = (18.5 * Math.pow(height / 100, 2)).toFixed(1);
        const maxWeight = (24.9 * Math.pow(height / 100, 2)).toFixed(1);
        setBmiRange([minWeight, maxWeight]);
        console.log("bmi range - " + minWeight + " - " + maxWeight);
      } else {
        const minWeight = (18.5 * Math.pow(height, 2)) / 703;
        const maxWeight = (24.9 * Math.pow(height, 2)) / 703;
        setBmiRange([minWeight.toFixed(1), maxWeight.toFixed(1)]);
        console.log("bmi range - " + minWeight + " - " + maxWeight);
      }
    };

    calculateHealthyWeightRange();
  }, [height, unit]);

  return (
    <div className="m-6 rounded-xl border bg-white p-6 lg:w-[564px]">
      <h4 className="mb-6 text-2xl font-semibold text-dark-blue">
        Enter your details below
      </h4>

      <div className="flex justify-between gap-6">
        <label className="flex items-center font-semibold text-dark-blue">
          <input
            type="radio"
            value="metric"
            checked={unit === "metric"}
            onClick={handleUnitChange}
            className="hover:border-blue checked:border-5px h-8 w-8 checked:bg-blue-400 indeterminate:bg-gray-300"
          />
          <span className="ml-5">Metric</span>
        </label>
        <label className="flex items-center font-semibold text-dark-blue">
          <input
            type="radio"
            value="imperial"
            checked={unit === "imperial"}
            onClick={handleUnitChange}
            className="hover:border-blue checked:border-5px h-8 w-8 checked:bg-blue-400 indeterminate:bg-gray-300"
          />
          <span className="ml-5">Imperial</span>
        </label>
      </div>

      {/* inputs metric */}

      {unit === "metric" ? (
        <>
          <div className="mb-4 mt-6">
            <p className="mb-2 text-slate-500">Height</p>
            <div className="flex justify-between rounded-xl border px-6 py-5 focus-within:border-blue-500">
              <input
                type="text"
                placeholder="0"
                className="max-w-[180px] cursor-pointer text-2xl font-semibold text-slate-800 focus:outline-none"
                onChange={handleHeightChange}
                value={height}
              />
              <p className="text-bright-blue text-2xl  font-semibold">cm</p>
            </div>
          </div>
          <div className="mb-4 mt-6">
            <p className="mb-2 text-slate-500">Weight</p>
            <div className="flex justify-between rounded-xl border px-6 py-5 focus-within:border-blue-500">
              <input
                type="text"
                placeholder="0"
                className="max-w-[180px] cursor-pointer text-2xl font-semibold text-slate-800 focus:outline-none"
                onChange={handleWeightChange}
                value={weight}
              />
              <p className="text-bright-blue text-2xl  font-semibold">kg</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-end justify-center gap-4">
            {/* Inputs for imperial Height*/}
            <div className="mb-4 mt-6">
              <p className="mb-2 text-slate-500">Height</p>
              <div className="flex justify-between rounded-xl border px-6 py-5 focus-within:border-blue-500">
                <input
                  type="text"
                  placeholder="0"
                  className="w-1/2 cursor-pointer text-2xl font-semibold text-slate-800 focus:outline-none"
                  onChange={handleFeetChange}
                />
                <p className="text-bright-blue text-2xl  font-semibold">ft</p>
              </div>
            </div>
            <div className="mb-4 mt-6">
              <div className="flex justify-between rounded-xl border px-6 py-5 focus-within:border-blue-500">
                <input
                  type="text"
                  placeholder="0"
                  className=" w-1/2 cursor-pointer text-2xl font-semibold text-slate-800 focus:outline-none"
                  onChange={handleInchChange}
                />
                <p className="text-bright-blue text-2xl  font-semibold">in</p>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-center gap-4">
            {/* Inputs for imperial Weight */}
            <div className="mb-4 mt-6">
              <p className="mb-2 text-slate-500">Weight</p>
              <div className="flex justify-between rounded-xl border px-6 py-5 focus-within:border-blue-500">
                <input
                  type="text"
                  placeholder="0"
                  className="w-1/2 cursor-pointer text-2xl font-semibold text-slate-800 focus:outline-none"
                  onChange={handleStoneChange}
                />
                <p className="text-bright-blue text-2xl  font-semibold">st</p>
              </div>
            </div>
            <div className="mb-4 mt-6">
              <div className="flex justify-between rounded-xl border px-6 py-5 focus-within:border-blue-500">
                <input
                  type="text"
                  placeholder="0"
                  className=" w-1/2 cursor-pointer text-2xl font-semibold text-slate-800 focus:outline-none"
                  onChange={handlePoundsChange}
                />
                <p className="text-bright-blue text-2xl  font-semibold">lbs</p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* results */}

      <div className="from-bright-blue to-less-bright-blue rounded-2xl bg-gradient-to-r p-8 md:rounded-r-full">
        {weight === "" ||
        height === "" ||
        isNaN(Number(bmi)) ||
        !isFinite(Number(bmi)) ? (
          <div>
            <h1 className="mb-4 text-2xl font-semibold text-white">Welcome</h1>
            <span className="text-sm text-white">
              Enter your height and weight and you’ll see your BMI result here
            </span>
          </div>
        ) : (
          <div className="items-center md:flex">
            <div className="md:basis-1/2">
              <h5 className="mb-2 font-semibold text-white">Your BMI is...</h5>
              <h1 className="mb-6 text-5xl font-semibold text-white md:mb-0">
                {bmi}
              </h1>
            </div>
            <span className="basis-1/2 text-sm text-white">
              Your BMI suggests you’re a {bmiCategory} weight. Your ideal weight
              is between{" "}
              <spam className="font-semibold">
                {bmiRange[0]}
                {unit === "metric" ? " kgs" : " lbs"} -{bmiRange[1]}
                {unit === "metric" ? " kgs" : " lbs"}.
              </spam>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BmiCalculator;
