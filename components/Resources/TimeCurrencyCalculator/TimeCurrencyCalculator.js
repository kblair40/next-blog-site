import React, { useState } from "react";

// import Input from "components/UI/Input";
import FormControl from "components/UI/FormControl";
import Button from "components/UI/Button";

const TimeCurrencyCalculator = () => {
  const [takeHomePay, setTakeHomePay] = useState("");
  const [purchaseCost, setPurchaseCost] = useState("");
  const [payFrequency, setPayFrequency] = useState("bi-weekly");
  const radioClasses = ["flex space-x-2 items-center sm:space-x-4"];

  const handleChangeTakeHomePay = (val) => {
    setTakeHomePay(val);
  };
  const handleChangePurchaseCost = (val) => {
    setPurchaseCost(val);
  };

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
            onChange={handleChangeTakeHomePay}
          />

          <div>
            <p className="font-medium">Pay Frequency</p>
            <div className="pt-1 flex space-y-1 flex-col w-fit sm:flex-row sm:space-x-4 sm:space-y-0">
              <PayFrequency />
            </div>
          </div>

          <FormControl
            inputClasses={["mt-1 w-full"]}
            inputType="number"
            label="Purchase Cost"
            onChange={handleChangePurchaseCost}
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

const PayFrequency = () => {
  return (
    <React.Fragment>
      <div className="flex items-center space-x-2">
        <input type="radio" id="weekly" name="payfrequency" value="weekly" />
        <label for="weekly">Weekly</label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="bi-weekly"
          name="payfrequency"
          value="bi-weekly"
        />
        <label for="bi-weekly">Bi-Weekly</label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="bi-monthly"
          name="payfrequency"
          value="bi-monthly"
        />
        <label for="bi-monthly">Bi-Monthly</label>
      </div>

      <div className="flex items-center space-x-2">
        <input type="radio" id="monthly" name="payfrequency" value="monthly" />
        <label for="monthly">Monthly</label>
      </div>
    </React.Fragment>
  );
};
