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

const fontOptions = [fontSizeGroup, fontWeightGroup, fontColorGroup];

export default fontOptions;
