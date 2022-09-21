import React from "react";
import classNames from "classnames";

const ContentInput = React.forwardRef((props, ref) => {
  const classes = classNames(["border border-slate-300 rounded-lg w-full"]);

  return <textarea className={classes} ref={ref} rows={10} />;
});

ContentInput.displayName = "ContentInput";

export default ContentInput;
