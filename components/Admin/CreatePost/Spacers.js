import React from "react";
import classNames from "classnames";

import Button from "components/UI/Button";

const Spacers = ({ addSpace }) => {
  const wrapperClasses = classNames({
    "flex space-x-2 w-full": true,
  });

  const buttonClasses = ["font-sm py-1 px-1"];

  const handleClick = (cls) => {
    addSpace(cls);
  };

  return (
    <div className={wrapperClasses}>
      <p className="font-medium">Spacers</p>
      <Button
        onClick={() => handleClick("spacer-sm")}
        size="sm"
        className={buttonClasses}
      >
        8px (sm)
      </Button>
      <Button
        onClick={() => handleClick("spacer-lg")}
        size="sm"
        className={buttonClasses}
      >
        16px (lg)
      </Button>
    </div>
  );
};

export default Spacers;
