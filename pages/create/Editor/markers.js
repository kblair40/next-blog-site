import Image from "next/image";

import ulIcon from "public/assets/icons/list-ul.svg";
import olIcon from "public/assets/icons/list-ol.svg";
import linkIcon from "public/assets/icons/link.svg";

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
            name: <b>H1</b>,
            title: "H1",
            type: "line-marker",
          },
          {
            key: "h2",
            marker: "## ",
            name: <b>H2</b>,
            title: "H2",
            type: "line-marker",
          },
          {
            key: "h3",
            marker: "### ",
            name: <b>H3</b>,
            title: "H3",
            type: "line-marker",
          },
          {
            key: "h4",
            marker: "#### ",
            name: <b>H4</b>,
            title: "H4",
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
            name: <b>bold</b>,
            prefix: "**",
            suffix: "**",
            title: "bold",
            type: "marker",
          },
          {
            defaultText: "italic",
            key: "italic",
            name: <i>italic</i>,
            prefix: "*",
            suffix: "*",
            title: "italic",
            type: "marker",
          },
          {
            defaultText: "strikethrough",
            key: "strikethrough",
            name: <del>strikethrough</del>,
            prefix: "~~",
            suffix: "~~",
            title: "strikethrough",
            type: "marker",
          },
          {
            key: "blockquote",
            marker: "> ",
            name: "blockquote",
            title: "blockquote",
            type: "line-marker",
          },
          {
            defaultText: "inline code",
            key: "inline-code",
            name: "inlineCode",
            prefix: "`",
            suffix: "`",
            title: "inlineCode",
            type: "marker",
          },
          {
            defaultText: "code",
            key: "code",
            multipleLine: true,
            name: "code",
            prefix: "```",
            suffix: "```",
            title: "code",
            type: "marker",
          },
          {
            key: "hr",
            multipleLine: true,
            name: <hr style={{ width: "100%" }} />,
            template: "---",
            title: "hr",
            type: "template",
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
  {
    key: "other",
    markers: [],
  },
];

export default markers;
