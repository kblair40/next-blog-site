import React from "react";
import classNames from "classnames";

import Button from "components/UI/Button";

const Spacers = ({ onClick }) => {
  const wrapperClasses = classNames({
    "flex space-x-2 w-full": true,
  });

  const buttonClasses = ["font-sm py-1 px1"];

  return (
    <div className={wrapperClasses}>
      <p className="font-medium">Spacers</p>
      <Button size="sm" className={buttonClasses}>
        4px (sm)
      </Button>
      <Button size="sm" className={buttonClasses}>
        8px (md)
      </Button>
      <Button size="sm" className={buttonClasses}>
        16px (lg)
      </Button>
    </div>
  );
};

export default Spacers;
