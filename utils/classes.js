const buttonSizes = {
  xs: "h-6",
  sm: "h-8 px-2 text-sm",
  md: "h-10 px-3",
  lg: "h-12",
};

export const getSizeClasses = (el, size = "md") => {
  if (el === "button") {
    return [buttonSizes[size]];
  } else {
    return [];
  }
};
