import React, { useState } from "react";

// import Input from "components/UI/Input";
import FormControl from "components/UI/FormControl";
import Button from "components/UI/Button";

const TimeCurrencyCalculator = () => {
  const [takeHomePay, setTakeHomePay] = useState("");
  const [purchaseCost, setPurchaseCost] = useState("");
  const radioClasses = ["flex space-x-2 items-center sm:space-x-4"];

  return (
    <div className="w-fit">
      {/* <div className="flex flex-col space-y-4 w-fit border"> */}
      <div className="mb-8">
        <h2 className="text-2xl text-center font-semibold mb-2">
          Time Currency Calculator
        </h2>
        <p className="text-center">
          Some kind of description. What it does, maybe also how to use it. Or,
          we can skip this or put it somewhere else
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col space-y-4 w-fit">
          <FormControl
            inputClasses={["mt-1 w-full"]}
            inputType="number"
            label="Take Home Pay (after tax)"
          />

          <div>
            <p className="font-medium">Pay Frequency</p>
            <div className="flex flex-col w-fit sm:flex-row sm:space-x-4">
              <FormControl
                inputType="radio"
                label="Weekly"
                wrapperClasses={radioClasses}
              />
              <FormControl
                inputType="radio"
                label="Bi-Weekly"
                wrapperClasses={radioClasses}
              />
              <FormControl
                inputType="radio"
                label="Bi-Monthly"
                wrapperClasses={radioClasses}
              />
              <FormControl
                inputType="radio"
                label="Monthly"
                wrapperClasses={radioClasses}
              />
            </div>
          </div>

          <FormControl
            inputClasses={["mt-1 w-full"]}
            inputType="number"
            label="Purchase Cost"
          />

          <div className="pt-4">
            <Button classes={["w-full"]}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeCurrencyCalculator;
