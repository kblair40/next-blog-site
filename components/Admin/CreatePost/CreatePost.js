import React, { useState, useRef } from "react";
import classNames from "classnames";

import Spacers from "./Spacers";
import ContentInput from "./ContentInput";
import ContentOptions from "./ContentOptions";
import CreatePreview from "./CreatePreview";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import IconButton from "components/UI/IconButton";
import api from "utils/api";

const CreatePost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postImageUrl, setPostImageUrl] = useState("");
  const [selectedEl, setSelectedEl] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [contentArray, setContentArray] = useState([]);

  const contentRef = useRef();

  const handleSubmit = async () => {
    if (!contentRef.current.value.length) return;

    setContentArray((prev) => [
      ...prev,
      {
        text: contentRef.current.value,
        el: selectedEl,
        classes: classNames(selectedClasses.map((cls) => cls.value)),
      },
    ]);
  };

  const handleChangeClasses = (val) => {
    console.log("CLASSES VALUE:", val);
    setSelectedClasses(val);
  };

  const handleSavePost = async () => {
    console.log("\n\nCONTENT ARRAY:", contentArray, "\n\n");
    const content = JSON.stringify(contentArray);
    // const content = contentArray;
    const title = postTitle || "Temporary Title";
    const status = 2;
    const data = { content, status, title, image_url: postImageUrl };

    try {
      const response = await api.post("/posts", data);
      console.log("\n\nSAVE POST RESPONSE:", response.data);
    } catch (err) {
      console.error("ERROR SAVING POST:", err);
    }
  };

  const handleAddSpace = (heightClass) => {
    const spacer = {
      text: "",
      el: { value: "div" },
      classes: heightClass,
    };
    console.log("HEIGHT CLASS:", heightClass);
    console.log("SPACER:", spacer);

    setContentArray((prev) => [...prev, spacer]);
  };

  const undo = () => {
    const copy = [...contentArray];
    copy.pop();
    setContentArray(copy);
  };

  return (
    <React.Fragment>
      <div className="flex justify-center w-screen">
        <div className="flex flex-col space-y-4 items-center w-4/5">
          <div className="w-full flex space-x-4">
            <Input
              placeholder="Post Title"
              classes={["w-60"]}
              onChange={(val) => setPostTitle(val)}
            />
            <Input
              placeholder="Image URL"
              classes={["w-60"]}
              onChange={(val) => setPostImageUrl(val)}
            />
            <Button
              classes={["leading-4"]}
              isDisabled={!contentArray.length}
              onClick={handleSavePost}
            >
              Finish & Save Post
            </Button>
          </div>

          <ContentInput ref={contentRef} />

          <div className="w-full flex items-center justify-between flex-wrap space-x-4">
            <ContentOptions
              selectedEl={selectedEl}
              onChangeEl={(el) => setSelectedEl(el)}
              selectedClasses={selectedClasses}
              onChangeClasses={handleChangeClasses}
            />

            <Button isDisabled={!selectedEl} onClick={handleSubmit}>
              Add Content
            </Button>
            <IconButton
              onClick={undo}
              icon={
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.95311 11.0156H0.5625C0.251859 11.0156 0 10.7637 0 10.4531V1.0625C0 0.751859 0.251859 0.5 0.5625 0.5H2.8125C3.12314 0.5 3.375 0.751859 3.375 1.0625V4.724C5.52061 2.3412 8.63719 0.850156 12.102 0.875328C18.5194 0.921922 23.6542 6.10766 23.6406 12.5253C23.6269 18.934 18.4275 24.125 12.0156 24.125C9.01144 24.125 6.27361 22.9853 4.21045 21.1149C3.97144 20.8983 3.96042 20.5265 4.18856 20.2984L5.78077 18.7062C5.99048 18.4964 6.32742 18.485 6.54956 18.6815C8.00437 19.9689 9.91781 20.75 12.0156 20.75C16.575 20.75 20.2656 17.0602 20.2656 12.5C20.2656 7.94061 16.5758 4.25 12.0156 4.25C9.27361 4.25 6.84623 5.58481 5.34652 7.64061H9.95311C10.2637 7.64061 10.5156 7.89247 10.5156 8.20311V10.4531C10.5156 10.7637 10.2637 11.0156 9.95311 11.0156V11.0156Z"
                    fill="#1E293B"
                  />
                </svg>
              }
            />
          </div>

          <Spacers addSpace={handleAddSpace} />

          <CreatePreview content={contentArray} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreatePost;

const ToggleBorderButton = ({ isVisible, onClick }) => {
  // VisibleIcon if visible.  NotVisibleIcon if not visible
  const icon = isVisible ? (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.8489 11.8663C22.4952 7.27386 17.8355 4.16666 12.5 4.16666C7.16447 4.16666 2.50345 7.27603 0.151018 11.8667C0.0517306 12.0631 0 12.2801 0 12.5002C0 12.7203 0.0517306 12.9373 0.151018 13.1337C2.50475 17.7261 7.16447 20.8333 12.5 20.8333C17.8355 20.8333 22.4965 17.7239 24.8489 13.1332C24.9482 12.9368 25 12.7198 25 12.4998C25 12.2797 24.9482 12.0627 24.8489 11.8663V11.8663ZM12.5 18.75C11.2638 18.75 10.0555 18.3834 9.02766 17.6967C7.99985 17.0099 7.19878 16.0338 6.72573 14.8918C6.25268 13.7497 6.12891 12.4931 6.37007 11.2807C6.61123 10.0683 7.20648 8.95465 8.08056 8.08057C8.95464 7.20649 10.0683 6.61124 11.2807 6.37008C12.493 6.12892 13.7497 6.2527 14.8917 6.72574C16.0338 7.19879 17.0099 7.99987 17.6967 9.02768C18.3834 10.0555 18.75 11.2639 18.75 12.5C18.7504 13.3209 18.589 14.1338 18.275 14.8922C17.9611 15.6507 17.5007 16.3399 16.9203 16.9203C16.3398 17.5007 15.6507 17.9611 14.8922 18.2751C14.1338 18.589 13.3208 18.7504 12.5 18.75V18.75ZM12.5 8.33332C12.1281 8.33852 11.7586 8.39385 11.4015 8.49782C11.6958 8.89785 11.8371 9.39013 11.7996 9.88538C11.7621 10.3806 11.5484 10.8461 11.1972 11.1973C10.846 11.5485 10.3806 11.7622 9.88537 11.7996C9.39012 11.8371 8.89784 11.6958 8.49781 11.4015C8.27001 12.2407 8.31113 13.1302 8.61538 13.9449C8.91962 14.7595 9.47167 15.4582 10.1938 15.9427C10.916 16.4271 11.7719 16.6729 12.641 16.6455C13.5102 16.618 14.3489 16.3187 15.039 15.7896C15.7291 15.2606 16.236 14.5284 16.4882 13.6962C16.7404 12.8639 16.7253 11.9736 16.445 11.1504C16.1647 10.3272 15.6333 9.61268 14.9256 9.10733C14.2179 8.60198 13.3696 8.33128 12.5 8.33332V8.33332Z"
        fill="#1E293B"
      />
    </svg>
  ) : (
    <svg
      width="25"
      height="21"
      viewBox="0 0 25 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 16.125C9.53709 16.125 7.13865 13.8317 6.91795 10.9254L2.82029 7.75861C2.28162 8.43439 1.78591 9.14884 1.38591 9.93009C1.29656 10.1069 1.25 10.3021 1.25 10.5002C1.25 10.6983 1.29656 10.8936 1.38591 11.0703C3.50427 15.2035 7.69802 18 12.5 18C13.5511 18 14.5652 17.8438 15.5426 17.5914L13.5156 16.0231C13.1808 16.0877 12.8409 16.1218 12.5 16.125ZM24.7586 18.3945L20.4402 15.057C21.752 13.9515 22.8309 12.5962 23.614 11.0699C23.7034 10.8932 23.75 10.6979 23.75 10.4998C23.75 10.3018 23.7034 10.1065 23.614 9.9297C21.4957 5.7965 17.3019 3.00001 12.5 3.00001C10.4888 3.00245 8.51037 3.50875 6.74529 4.47267L1.77576 0.631652C1.71095 0.581225 1.63685 0.544062 1.55768 0.522286C1.47851 0.500511 1.39582 0.49455 1.31434 0.504743C1.23287 0.514937 1.1542 0.541086 1.08283 0.581695C1.01146 0.622305 0.948797 0.676579 0.898414 0.741417L0.131617 1.72853C0.0298978 1.85938 -0.0156819 2.02528 0.00490249 2.18973C0.0254869 2.35419 0.11055 2.50373 0.241383 2.60548L23.2242 20.3684C23.289 20.4188 23.3631 20.456 23.4423 20.4777C23.5214 20.4995 23.6041 20.5055 23.6856 20.4953C23.7671 20.4851 23.8458 20.4589 23.9171 20.4183C23.9885 20.3777 24.0512 20.3234 24.1015 20.2586L24.8687 19.2715C24.9704 19.1406 25.0159 18.9747 24.9953 18.8102C24.9746 18.6457 24.8895 18.4962 24.7586 18.3945ZM17.582 12.8477L16.0469 11.6609C16.1761 11.2873 16.2447 10.8954 16.25 10.5C16.2576 9.92121 16.1294 9.34868 15.8756 8.82843C15.6218 8.30817 15.2495 7.85468 14.7887 7.50439C14.3279 7.1541 13.7913 6.91677 13.2221 6.81147C12.6529 6.70617 12.067 6.73582 11.5113 6.89806C11.7469 7.21724 11.8743 7.60332 11.875 8.00001C11.8691 8.13202 11.849 8.26299 11.8148 8.39064L8.93943 6.16837C9.93825 5.33369 11.1983 4.87597 12.5 4.87501C13.2388 4.8746 13.9704 5.01981 14.6531 5.30235C15.3357 5.58489 15.956 5.99921 16.4784 6.52162C17.0008 7.04403 17.4151 7.66429 17.6976 8.34693C17.9802 9.02957 18.1254 9.76121 18.125 10.5C18.125 11.3449 17.9183 12.1324 17.582 12.8481V12.8477Z"
        fill="#1E293B"
      />
    </svg>
  );

  return <IconButton icon={icon} />;
};
