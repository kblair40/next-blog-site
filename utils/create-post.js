import React from "react";
import classNames from "classnames";

export const makeElement = (elObj, i) => {
  let type = elObj.el; // ex. "h2", "p", "div", "img", "ul" etc...
  let classes = elObj.classes;

  // content in input at time of submission
  const innerText = ["div", "img"].includes(type) ? null : elObj.text;

  if (type === "p-with-link") {
    const el = makeParagraphWithLink(elObj);
    if (el) {
      // if el === null, continue on and make a paragraph
      return el;
    }
  }

  if (["ol", "ul"].includes(type)) {
    console.log("\n\nOL OR UL:", elObj.classes);
    return makeList(innerText, type, elObj.classes);
  }

  const props = { className: classNames(classes), key: i };

  if (type === "img") props["src"] = elObj.text;

  if (type === "p-with-link") type = "p";

  const newElement = React.createElement(type, props, innerText);

  return newElement;
};

const makeParagraphWithLink = (elObj) => {
  console.log("\nEL OBJ WITH LINK:", elObj);
  let text = elObj.text;

  const openIdx = text.search("<");
  const closeIdx = text.search(">");

  let match = text.slice(openIdx, closeIdx + 1);
  match = match.slice(1, -1); // remove start/end </>
  let [url, textString] = match
    .split("|")
    .map((val) => val.trim().split("^")[1]);

  if (!url || !textString) return null;

  let anchorEl = React.createElement(
    "a",
    { href: url, target: "_blank" },
    textString
  );

  let frontString = text.slice(0, openIdx).trim().split(/ +/).join(" ");
  let backString = text
    .slice(closeIdx + 1)
    .trim()
    .split(/ +/)
    .join(" ");

  let paragraph = React.createElement("p", null, [
    frontString + " ",
    anchorEl,
    backString.length ? backString : "",
  ]);
  console.log("PARAGRAPH:", paragraph);

  return paragraph;
};

const makeListItems = (textArray) => {
  const listItems = [];
  for (let textItem of textArray) {
    let li = React.createElement("li", null, textItem);
    listItems.push(li);
  }

  // console.log("\nLIST ITEMS:", listItems, "\n");
  return listItems;
};

const makeList = (text, type, classes = []) => {
  console.log("\nLIST VALS:", { text, type, classes });
  // removes all newlines (\n)
  text = text.replace(/\n/g, "");
  if (text.startsWith("#")) text = text.slice(1);
  const textArr = text.split("#").map((t) => t.trim());
  const listItems = makeListItems(textArr);

  const list = React.createElement(
    type,
    { className: classNames(classes) },
    listItems
  );
  return list;
};
