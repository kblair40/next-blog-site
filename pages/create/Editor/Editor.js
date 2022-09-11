import React, { useState } from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";

import Button from "components/UI/Button";
import styles from "./Editor.module.scss";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const Editor = () => {
  const [value, setValue] = useState();
  const [selectedTab, setSelectedTab] = useState("write");

  const handleSubmit = async () => {
    // const value = inputRef.current.value;
    // console.log("INPUT VALUE:", value);
    // const result = await markdownToHtml(value);
    // console.log("RESULT:", result);
    // setMarkdown(value);
    // setPreviewModalOpen(true);
  };

  const save = async function* (data) {
    // Promise that waits for "time" milliseconds
    const wait = function (time) {
      return new Promise((a, r) => {
        setTimeout(() => a(), time);
      });
    };

    // Upload "data" to your server
    // Use XMLHttpRequest.send to send a FormData object containing
    // "data"
    // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest

    await wait(2000);
    // yields the URL that should be inserted in the markdown
    yield "https://picsum.photos/300";
    await wait(2000);

    // returns true meaning that the save was successful
    return true;
  };

  return (
    <div className={styles.container}>
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        childProps={{
          writeButton: {
            tabIndex: -1,
          },
        }}
        paste={{
          saveImage: save,
        }}
        minEditorHeight={50}
        minPreviewHeight={50}
        heightUnits="vh"
        classes={{
          reactMde: styles.container__editor,
          toolbar: styles.container__toolbar,
        }}
      />

      {/* <Button onClick={handleSubmit}>Preview</Button> */}
    </div>
  );
};

export default Editor;

//
//
//
// import React, { useRef, useState } from "react";

// import markdownToHtml from "utils/markdownToHtml";
// import Button from "components/UI/Button";
// import PreviewModal from "components/PreviewModal";

// import styles from "./Editor.module.scss";
//
//
//
// const Editor = () => {
//   const [previewModalOpen, setPreviewModalOpen] = useState(false);
//   const [markdown, setMarkdown] = useState("");

//   const inputRef = useRef();

//   const handleSubmit = async () => {
//     const value = inputRef.current.value;
//     console.log("INPUT VALUE:", value);
//     const result = await markdownToHtml(value);
//     console.log("RESULT:", result);

//     setMarkdown(value);
//     setPreviewModalOpen(true);
//   };

//   const closePreview = () => {
//     setPreviewModalOpen(false);
//     setMarkdown("");
//   };

//   return (
//     <React.Fragment>
//       <textarea ref={inputRef} className={styles.text_area} />

//       <Button onClick={handleSubmit}>Preview</Button>

//       <PreviewModal
//         isOpen={previewModalOpen}
//         onClose={closePreview}
//         markdown={markdown}
//       />
//     </React.Fragment>
//   );
// };

// export default Editor;
