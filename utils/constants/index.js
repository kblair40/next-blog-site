import fontOptions from "./fontOptions";
import imageOptions from "./imageOptions";
import listOptions from "./listOptions";

export { default as categories } from "./categories";

export const elementOptions = [
  // { value: "h1", label: "h1" },
  { value: "h2", label: "h2" },
  { value: "h3", label: "h3" },
  { value: "h4", label: "h4" },
  { value: "h5", label: "h5" },
  // { value: "h6", label: "h6" },
  { value: "p", label: "paragraph" },
  { value: "img", label: "image" },
  { value: "ul", label: "u-list" },
  { value: "ol", label: "o-list" },
];

export const classOptions = {
  // h1: fontOptions,
  h2: fontOptions,
  h3: fontOptions,
  h4: fontOptions,
  h5: fontOptions,
  // h6: fontOptions,
  p: fontOptions,
  img: imageOptions,
  ul: listOptions,
  ol: listOptions,
};

const defaultHeadingClasses = [{ label: "bold", value: "font-bold" }];
// export const defaultClasses = {
//   h1: [...defaultHeadingClasses, { label: "6xl", value: "text-6xl" }],
//   h2: [...defaultHeadingClasses, { label: "5xl", value: "text-5xl" }],
//   h3: [...defaultHeadingClasses, { label: "4xl", value: "text-4xl" }],
//   h4: [...defaultHeadingClasses, { label: "3xl", value: "text-3xl" }],
//   h5: [...defaultHeadingClasses, { label: "2xl", value: "text-2xl" }],
//   h6: [...defaultHeadingClasses, { label: "xl", value: "text-xl" }],
//   p: [],
//   img: [],
//   ul: [],
//   ol: [],
// };
export const defaultClasses = {
  // h1: [...defaultHeadingClasses],
  h2: [...defaultHeadingClasses],
  h3: [...defaultHeadingClasses],
  h4: [...defaultHeadingClasses],
  h5: [...defaultHeadingClasses],
  // h6: [...defaultHeadingClasses],
  p: [],
  img: [],
  ul: [],
  ol: [],
};
