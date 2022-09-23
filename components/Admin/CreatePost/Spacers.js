import React from "react";
import classNames from "classnames";

import Button from "components/UI/Button";

const Spacers = ({ addSpace }) => {
  const wrapperClasses = classNames({
    "flex space-x-2 w-full": true,
  });

  const buttonClasses = ["font-sm py-1 px1"];

  const handleClick = (cls) => {
    addSpace(cls);
  };

  return (
    <div className={wrapperClasses}>
      <p className="font-medium">Spacers</p>
      <Button
        onClick={() => handleClick("h-2")}
        size="sm"
        className={buttonClasses}
      >
        8px (md)
      </Button>
      <Button
        onClick={() => handleClick("h-4")}
        size="sm"
        className={buttonClasses}
      >
        16px (lg)
      </Button>
    </div>
  );
};

export default Spacers;
