import React from "react";
import { Textarea } from "@chakra-ui/react";

const ContentInput = React.forwardRef((props, ref) => {
  return <Textarea ref={ref} rows={10} mb="1rem" />;
});

ContentInput.displayName = "ContentInput";

export default ContentInput;
