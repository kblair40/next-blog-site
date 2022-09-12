import Image from "next/image";

import ulIcon from "public/assets/icons/list-ul.svg";
import olIcon from "public/assets/icons/list-ol.svg";
import linkIcon from "public/assets/icons/link.svg";

const hStyle = { margin: "0 0.5rem" };

const markers = [
  {
    key: "header",
    markers: [
      {
        key: "header",
        markers: [
          {
            key: "h1",
            marker: "# ",
            name: <p style={hStyle}>H1</p>,
            title: "H1",
            type: "line-marker",
          },
          {
            key: "h2",
            marker: "## ",
            name: <p style={hStyle}>H2</p>,
            title: "H2",
            type: "line-marker",
          },
          {
            key: "h3",
            marker: "### ",
            name: <p style={hStyle}>H3</p>,
            title: "H3",
            type: "line-marker",
          },
          {
            key: "h4",
            marker: "#### ",
            name: <p style={hStyle}>H4</p>,
            title: "H4",
            type: "line-marker",
          },
          {
            key: "h4",
            marker: "##### ",
            name: <p style={hStyle}>H5</p>,
            title: "H5",
            type: "line-marker",
          },
          {
            key: "h4",
            marker: "###### ",
            name: <p style={hStyle}>H6</p>,
            title: "H6",
            type: "line-marker",
          },
        ],
        type: "dropdown",
      },
    ],
  },
  {
    key: "text",
    markers: [
      {
        key: "text",
        markers: [
          {
            defaultText: "bold",
            key: "bold",
            name: <p style={hStyle}>bold</p>,
            prefix: "**",
            suffix: "**",
            title: "bold",
            type: "marker",
          },
          {
            defaultText: "italic",
            key: "italic",
            name: <i style={hStyle}>italic</i>,
            prefix: "*",
            suffix: "*",
            title: "italic",
            type: "marker",
          },
          {
            defaultText: "strikethrough",
            key: "strikethrough",
            name: <del style={hStyle}>strikethrough</del>,
            prefix: "~~",
            suffix: "~~",
            title: "strikethrough",
            type: "marker",
          },
          {
            key: "blockquote",
            marker: "> ",
            name: <p style={hStyle}>blockquote</p>,
            title: "blockquote",
            type: "line-marker",
          },
        ],
        type: "dropdown",
      },
    ],
  },
  {
    key: "list",
    markers: [
      {
        key: "unordered-list",
        marker: "* ",
        name: <Image src={ulIcon} alt="UL" />,
        title: "UL",
        type: "line-marker",
      },
      {
        key: "ordered-list",
        marker: "1. ",
        name: <Image src={olIcon} alt="OL" />,
        title: "OL",
        type: "line-marker",
      },
    ],
  },
  {
    key: "additional",
    markers: [
      {
        defaultText: "text",
        key: "link",
        name: <Image src={linkIcon} alt="link" />,
        prefix: "[",
        suffix: "](url)",
        title: "link",
        type: "marker",
      },
    ],
  },
];

export default markers;
