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
const imageSizeGroup = {
  label: "Image Size",
  options: imageSizeOptions,
};

const imageOptions = [imageSizeGroup, imagePositionGroup];

export default imageOptions;
