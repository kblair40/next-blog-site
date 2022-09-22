export const elementOptions = [
  { value: "h1", label: "h1" },
  { value: "h2", label: "h2" },
  { value: "h3", label: "h3" },
  { value: "h4", label: "h4" },
  { value: "h5", label: "h5" },
  { value: "h6", label: "h6" },
  { value: "p", label: "paragraph" },
  { value: "div", label: "space" },
];

const fontColorOptions = [
  { label: "primary", value: "text-slate-800" },
  { label: "secondary", value: "text-slate-600" },
  { label: "tertiary", value: "text-slate-500" },
];
const fontColorGroup = {
  label: "Font Colors",
  options: fontColorOptions,
};

// TODO: MAKE CERTAIN OPTIONS "FIXED" VIA REACT-SELECT
const fontSizeOptions = [
  { label: "xs", value: "text-xs" }, // 12px
  { label: "sm", value: "text-sm" }, // 14px
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

const headingOptions = [fontSizeGroup, fontWeightGroup, fontColorGroup];

export const classOptions = {
  h1: headingOptions,
  h2: headingOptions,
  h3: headingOptions,
  h4: headingOptions,
  h5: headingOptions,
  h6: headingOptions,
  p: headingOptions, // TODO: Change this to actual p tag classes
  div: [
    { label: "xs (4px)", value: "h-1" },
    { label: "sm (8px)", value: "h-2" },
    { label: "md (12px)", value: "h-3" },
    { label: "lg (16px)", value: "h-4" },
  ],
};

const defaultHeadingClasses = [{ label: "bold", value: "font-bold" }];

// export const defaultClasses = {
//   h1: [...defaultHeadingClasses],
//   h2: [...defaultHeadingClasses],
//   h3: [...defaultHeadingClasses],
//   h4: [...defaultHeadingClasses],
//   h5: [...defaultHeadingClasses],
//   h6: [...defaultHeadingClasses],
//   p: [],
//   div: [{ label: "xs (4px)", value: "h-1" }],
// };

export const defaultClasses = {
  h1: [...defaultHeadingClasses, { label: "6xl", value: "text-6xl" }],
  h2: [...defaultHeadingClasses, { label: "5xl", value: "text-5xl" }],
  h3: [...defaultHeadingClasses, { label: "4xl", value: "text-4xl" }],
  h4: [...defaultHeadingClasses, { label: "3xl", value: "text-3xl" }],
  h5: [...defaultHeadingClasses, { label: "2xl", value: "text-2xl" }],
  h6: [...defaultHeadingClasses, { label: "xl", value: "text-xl" }],
  p: [],
  div: [{ label: "xs (4px)", value: "h-1" }],
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import Image from "next/image";

// import ulIcon from "public/assets/icons/list-ul.svg";
// import olIcon from "public/assets/icons/list-ol.svg";
// import linkIcon from "public/assets/icons/link.svg";

// const hStyle = { margin: "0 0.5rem" };

// export const markers = [
//   {
//     key: "header",
//     markers: [
//       {
//         key: "header",
//         markers: [
//           {
//             key: "h1",
//             marker: "# ",
//             name: <p style={hStyle}>H1</p>,
//             title: "H1",
//             type: "line-marker",
//           },
//           {
//             key: "h2",
//             marker: "## ",
//             name: <p style={hStyle}>H2</p>,
//             title: "H2",
//             type: "line-marker",
//           },
//           {
//             key: "h3",
//             marker: "### ",
//             name: <p style={hStyle}>H3</p>,
//             title: "H3",
//             type: "line-marker",
//           },
//           {
//             key: "h4",
//             marker: "#### ",
//             name: <p style={hStyle}>H4</p>,
//             title: "H4",
//             type: "line-marker",
//           },
//           {
//             key: "h5",
//             marker: "##### ",
//             name: <p style={hStyle}>H5</p>,
//             title: "H5",
//             type: "line-marker",
//           },
//           {
//             key: "p",
//             marker: "###### ",
//             name: <p style={hStyle}>H6</p>,
//             title: "H6",
//             type: "line-marker",
//           },
//         ],
//         type: "dropdown",
//       },
//     ],
//   },
//   {
//     key: "text",
//     markers: [
//       {
//         key: "text",
//         markers: [
//           {
//             defaultText: "bold",
//             key: "bold",
//             name: <p style={hStyle}>bold</p>,
//             prefix: "**",
//             suffix: "**",
//             title: "bold",
//             type: "marker",
//           },
//           {
//             defaultText: "italic",
//             key: "italic",
//             name: <i style={hStyle}>italic</i>,
//             prefix: "*",
//             suffix: "*",
//             title: "italic",
//             type: "marker",
//           },
//           {
//             defaultText: "strikethrough",
//             key: "strikethrough",
//             name: <del style={hStyle}>strikethrough</del>,
//             prefix: "~~",
//             suffix: "~~",
//             title: "strikethrough",
//             type: "marker",
//           },
//           {
//             key: "blockquote",
//             marker: "> ",
//             name: <p style={hStyle}>blockquote</p>,
//             title: "blockquote",
//             type: "line-marker",
//           },
//         ],
//         type: "dropdown",
//       },
//     ],
//   },
//   {
//     key: "list",
//     markers: [
//       {
//         key: "unordered-list",
//         marker: "* ",
//         name: <Image src={ulIcon} alt="UL" />,
//         title: "UL",
//         type: "line-marker",
//       },
//       {
//         key: "ordered-list",
//         marker: "1. ",
//         name: <Image src={olIcon} alt="OL" />,
//         title: "OL",
//         type: "line-marker",
//       },
//     ],
//   },
//   {
//     key: "additional",
//     markers: [
//       {
//         defaultText: "text",
//         key: "link",
//         name: <Image src={linkIcon} alt="link" />,
//         prefix: "[",
//         suffix: "](url)",
//         title: "link",
//         type: "marker",
//       },
//     ],
//   },
// ];
