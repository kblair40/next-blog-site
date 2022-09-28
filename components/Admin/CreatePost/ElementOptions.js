import React from "react";
import Select from "react-select";

import { elementOptions } from "utils/constants";

const ElementOptions = ({ onChangeEl }) => {
  return (
    <Select
      placeholder="Element"
      options={elementOptions}
      onChange={(val) => onChangeEl(val)}
    />
  );
};

export default ElementOptions;
