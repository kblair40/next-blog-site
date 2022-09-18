import React, { useState } from "react";

// import Input from "components/UI/Input";
import FormControl from "components/UI/FormControl";
import Button from "components/UI/Button";
import Modal from "components/UI/Modal";

const hoursMap = {
  weekly: 40,
  "bi-weekly": 80,
  "bi-monthly": 86.66666666,
  monthly: 173.33333333,
};

const TimeCurrencyCalculator = () => {
  const [takeHomePay, setTakeHomePay] = useState("");
  const [purchaseCost, setPurchaseCost] = useState("");
  const [payFrequency, setPayFrequency] = useState("bi-weekly");
  const [hoursToWork, setHoursToWork] = useState();
  const [showResults, setShowResults] = useState(false);

  const handleChangeTakeHomePay = (val) => {
    setTakeHomePay(val);
  };
  const handleChangePurchaseCost = (val) => {
    setPurchaseCost(val);
  };
  const handleChangePayFrequency = (e) => {
    setPayFrequency(e.target.value);
  };

  const calculateHoursToPurchase = () => {
    const purchasePrice = parseFloat(purchaseCost);
    const income = parseFloat(takeHomePay);
    const hourlyIncome = income / hoursMap[payFrequency];
    console.log("HOURLY INCOME:", hourlyIncome);

    const hoursNeededToWork = purchasePrice / hourlyIncome;
    setHoursToWork(hoursNeededToWork);

    setShowResults(true);
  };

  const preventSubmit = !takeHomePay || !purchaseCost || !payFrequency;

  return (
    <React.Fragment>
      <div className="w-fit">
        <div className="mb-8">
          <h2 className="text-2xl text-center font-semibold mb-2">
            Time Currency Calculator
          </h2>
          <p className="text-center">
            Some kind of description. What it does, maybe also how to use it.
            Or, we can skip this or put it somewhere else
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
                <PayFrequency onChange={handleChangePayFrequency} />
              </div>
            </div>

            <FormControl
              inputClasses={["mt-1 w-full"]}
              inputType="number"
              label="Purchase Cost"
              onChange={handleChangePurchaseCost}
            />

            <div className="pt-4">
              <Button
                onClick={calculateHoursToPurchase}
                isDisabled={preventSubmit}
                classes={["w-full"]}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        centerContent={true}
        isOpen={showResults}
        onClose={() => setShowResults(false)}
      >
        <div className="flex flex-col justify-center items-center">
          <p className="text-center mb-2">
            Bringing in ${takeHomePay}, {payFrequency.toLowerCase()}, you will
            be able to afford your purchase in...
          </p>
          <p className="text-4xl font-semibold">
            {hoursToWork.toFixed(2)} Hours
          </p>

          <p className="absolute bottom-0 text-xs">
            Probably not what you want. Let me know
          </p>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default TimeCurrencyCalculator;

const PayFrequency = ({ onChange }) => {
  return (
    <React.Fragment>
      <div className="flex items-center space-x-2">
        <input
          onChange={onChange}
          type="radio"
          id="weekly"
          name="payfrequency"
          value="weekly"
        />
        <label for="weekly">Weekly</label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          onChange={onChange}
          type="radio"
          id="bi-weekly"
          name="payfrequency"
          value="bi-weekly"
        />
        <label for="bi-weekly">Bi-Weekly</label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          onChange={onChange}
          type="radio"
          id="bi-monthly"
          name="payfrequency"
          value="bi-monthly"
        />
        <label for="bi-monthly">Bi-Monthly</label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          onChange={onChange}
          type="radio"
          id="monthly"
          name="payfrequency"
          value="monthly"
        />
        <label for="monthly">Monthly</label>
      </div>
    </React.Fragment>
  );
};
