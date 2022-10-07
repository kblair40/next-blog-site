import React from "react";
import classNames from "classnames";

export const makeElement = (elObj, i) => {
  const type = elObj.el; // ex. "h2", "p", "div", "img", "ul" etc...
  // console.log("\n\nEL TYPE:", type, "\n\n");
  let classes = elObj.classes;
  // content in input at time of submission
  const innerText = ["div", "img"].includes(type) ? null : elObj.text;

  if (type === "p-with-link") {
    const el = makeParagraphWithLink(elObj);
    return el;
  }

  if (["ol", "ul"].includes(type)) {
    console.log("\n\nOL OR UL:", elObj.classes);
    return makeList(innerText, type, elObj.classes);
  }

  const props = { className: classNames(classes), key: i };

  if (type === "img") props["src"] = elObj.text;

  const newElement = React.createElement(type, props, innerText);
  return newElement;
};

const makeParagraphWithLink = (elObj) => {
  console.log("\n\n********EL OBJ WITH LINK:", elObj);
  let text = elObj.text;
  // console.log("TEXT:", text);

  const openIdx = text.search("<");
  const closeIdx = text.search(">");

  // console.log("OPEN AND CLOSE:", { openIdx, closeIdx });

  let match = text.slice(openIdx, closeIdx + 1);
  // console.log("MATCH:", match);
  match = match.slice(1, -1); // remove start/end </>
  let [url, textString] = match
    .split("|")
    .map((val) => val.trim().split("^")[1]);

  let anchorEl = React.createElement(
    "a",
    { href: url, target: "_blank" },
    textString
  );
  // console.log("ANCHOR ELEMENT:", anchorEl, "\n\n");
  let frontString = text.slice(0, openIdx).trim().split(/ +/).join(" ");
  let backString = text
    .slice(closeIdx + 1)
    .trim()
    .split(/ +/)
    .join(" ");
  console.log("STRINGS:", { frontString, backString });
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
