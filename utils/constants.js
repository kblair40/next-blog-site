export const elementOptions = [
  { value: "h1", label: "h1" },
  { value: "h2", label: "h2" },
  { value: "h3", label: "h3" },
  { value: "h4", label: "h4" },
  { value: "h5", label: "h5" },
  { value: "h6", label: "h6" },
  { value: "p", label: "paragraph" },
  { value: "space", label: "space" },
];

const headingClasses = [
  { label: "bold", value: "font-bold" },
  { label: "semibold", value: "font-semibold" },
  { label: "normal", value: "font-normal" },
];

export const classOptions = {
  h1: headingClasses,
  h2: headingClasses,
  h3: headingClasses,
  h4: headingClasses,
  h5: headingClasses,
  h6: headingClasses,
  p: headingClasses, // TODO: Change this to actual p tag classes
  space: [
    { label: "4px", value: "h-1" },
    { label: "8px", value: "h-2" },
    { label: "12px", value: "h-3" },
    { label: "16px", value: "h-4" },
  ],
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
