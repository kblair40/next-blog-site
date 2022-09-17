const buttonSizes = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
};

export const getSizeClasses = (el, size = "md") => {
  if (el === "button") {
    return [buttonSizes[size]];
  } else {
    return [];
  }
};
