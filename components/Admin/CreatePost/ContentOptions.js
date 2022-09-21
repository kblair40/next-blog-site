import React from "react";
import Select from "react-select";

import { elementOptions, classOptions } from "utils/constants";

const ContentOptions = () => {
  return (
    <div className="flex space-x-4 items-center border flex-1">
      <Select placeholder="Element" options={elementOptions} />
      <Select
        className="flex-1"
        placeholder="Classes"
        options={elementOptions}
      />
    </div>
  );
};

export default ContentOptions;
