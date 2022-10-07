import React from "react";
import classNames from "classnames";

export const makeElement = (elObj, i) => {
  const type = elObj.el; // ex. "h2", "p", "div", "img", "ul" etc...
  console.log("\n\nEL TYPE:", type, "\n\n");
  let classes = elObj.classes;
  // content in input at time of submission
  const innerText = ["div", "img"].includes(type) ? null : elObj.text;

  if (["ol", "ul"].includes(type)) {
    console.log("\n\nOL OR UL:", elObj.classes);
    return makeList(innerText, type, elObj.classes);
  }

  const props = { className: classNames(classes), key: i };

  if (type === "img") props["src"] = elObj.text;

  const newElement = React.createElement(type, props, innerText);
  return newElement;
};

const makeListItems = (textArray) => {
  const listItems = [];
  for (let textItem of textArray) {
    let li = React.createElement("li", null, textItem);
    listItems.push(li);
  }

  console.log("\nLIST ITEMS:", listItems, "\n");
  return listItems;
};

const makeList = (text, type, classes = []) => {
  console.log("\nLIST VALS:", { text, type, classes });
  // removes all newlines (\n)
  text = text.replace(/\n/g, "");
  // console.log("text after:", { text });
  if (text.startsWith("#")) text = text.slice(1);
  // console.log("TEXT DOUBLE AFTER:", { text });
  const textArr = text.split("#").map((t) => t.trim());
  // console.log("TEXT ARR:", textArr, "\n\n");
  const listItems = makeListItems(textArr);

  const list = React.createElement(
    type,
    { className: classNames(classes) },
    listItems
  );
  return list;
};
