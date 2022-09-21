import React, { useState, useEffect } from "react";
import Select from "react-select";

import { elementOptions, classOptions } from "utils/constants";

const ContentOptions = ({
  selectedEl,
  onChangeEl,
  // selectedClasses,
  onChangeClasses,
}) => {
  const [classes, setClasses] = useState();

  useEffect(() => {
    if (selectedEl) {
      setClasses(classOptions[selectedEl.value]);
    }
  }, [selectedEl]);

  return (
    <div className="flex space-x-4 items-center flex-1">
      <Select
        placeholder="Element"
        options={elementOptions}
        onChange={(val) => onChangeEl(val)}
      />
      <Select
        className="flex-1"
        placeholder="Classes"
        options={classes}
        isMulti={true}
        isDisabled={!Boolean(selectedEl)}
        onChange={(val) => onChangeClasses(val)}
      />
    </div>
  );
};

export default ContentOptions;