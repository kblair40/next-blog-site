export const elementOptions = [
  { value: "h1", label: "h1" },
  { value: "h2", label: "h2" },
  { value: "h3", label: "h3" },
  { value: "h4", label: "h4" },
  { value: "h5", label: "h5" },
  { value: "h6", label: "h6" },
  { value: "p", label: "paragraph" },
  { value: "img", label: "image" },
];

const fontColorOptions = [
  { label: "primary", value: "text-slate-800" },
  { label: "secondary", value: "text-slate-500" },
  { label: "tertiary", value: "text-slate-400" },
  { label: "red", value: "text-red-700" },
  { label: "blue", value: "text-blue-700" },
];
const fontColorGroup = {
  label: "Font Colors",
  options: fontColorOptions,
};

// TODO: MAKE SIZE OPTIONS "FIXED" VIA REACT-SELECT
const fontSizeOptions = [
  { label: "xs", value: "text-xs" }, // 12px
  { label: "sm", value: "text-sm" }, // 14px
  { label: "sm", value: "text-md" }, // 16px
  { label: "lg", value: "text-lg" }, // 18px
  { label: "xl", value: "text-xl" }, // 18px
  { label: "2xl", value: "text-2xl" }, // 18px
  { label: "3xl", value: "text-3xl" }, // 18px
  { label: "4xl", value: "text-4xl" }, // 18px
  { label: "5xl", value: "text-5xl" }, // 18px
  { label: "6xl", value: "text-6xl" }, // 18px
];
const fontSizeGroup = {
  label: "Font Sizes",
  options: fontSizeOptions,
};

const fontWeightOptions = [
  { label: "bold (700)", value: "font-bold" },
  { label: "semibold (600)", value: "font-semibold" },
  { label: "medium (500)", value: "font-medium" },
  { label: "normal (400 - default)", value: "font-normal" },
  { label: "light (300)", value: "font-light" },
  { label: "extralight (200)", value: "font-extralight" },
  { label: "thin (100)", value: "font-thin" },
];
const fontWeightGroup = {
  label: "Font Weights",
  options: fontWeightOptions,
};

const imagePostionOptions = [{ label: "center", value: "mx-auto" }];
const imagePositionGroup = {
  label: "Position",
  options: imagePostionOptions,
};

const imageSizeOptions = [
  { label: "full-width", value: "w-full" },
  { label: "3/4-width", value: "w-3/4" },
  { label: "half-width", value: "w-1/2" },
  { label: "1/4-width", value: "w-1/4" },
  { label: "full-height", value: "h-full" },
  { label: "3/4-height", value: "h-3/4" },
  { label: "half-width", value: "h-1/2" },
];
export const imageGroup = {
  label: "Image Size",
  options: imageSizeOptions,
};

const headingOptions = [fontSizeGroup, fontWeightGroup, fontColorGroup];

export const classOptions = {
  h1: headingOptions,
  h2: headingOptions,
  h3: headingOptions,
  h4: headingOptions,
  h5: headingOptions,
  h6: headingOptions,
  p: headingOptions, // TODO: Change this to actual p tag classes
  img: [imageGroup, imagePositionGroup],
};

const defaultHeadingClasses = [{ label: "bold", value: "font-bold" }];
export const defaultClasses = {
  h1: [...defaultHeadingClasses, { label: "6xl", value: "text-6xl" }],
  h2: [...defaultHeadingClasses, { label: "5xl", value: "text-5xl" }],
  h3: [...defaultHeadingClasses, { label: "4xl", value: "text-4xl" }],
  h4: [...defaultHeadingClasses, { label: "3xl", value: "text-3xl" }],
  h5: [...defaultHeadingClasses, { label: "2xl", value: "text-2xl" }],
  h6: [...defaultHeadingClasses, { label: "xl", value: "text-xl" }],
  p: [],
  img: [],
};
