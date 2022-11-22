import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import {
  Box,
  Text,
  Flex,
  Stack,
  Button as ChakraButton,
  Input as ChakraInput,
} from "@chakra-ui/react";

import Spacers from "./Spacers";
import Category from "./Category";
import ContentInput from "./ContentInput";
import ElementOptions from "./ElementOptions";
import CreatePreview from "./CreatePreview";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import IconButton from "components/UI/IconButton";
import api from "utils/api";

const CreatePostNew = () => {
  const [postTitle, setPostTitle] = useState("Post Title");
  const [postImageUrl, setPostImageUrl] = useState("");
  const [selectedEl, setSelectedEl] = useState("");
  const [contentArray, setContentArray] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const contentRef = useRef();

  const handleSubmit = async () => {
    if (!contentRef.current.value.length) return;

    setContentArray((prev) => [
      ...prev,
      {
        text: contentRef.current.value,
        el: selectedEl.value,
        classes: [],
      },
    ]);
  };

  const handleChangeCategory = ({ category, custom = false }) => {
    console.log("\nNEW CATEGORY:", category);
    console.log("custom =", custom, "\n");

    if (category && custom === true) {
      setCategory({ label: category, value: category });
    } else if (category && !custom) {
      setCategory(category);
    } else {
      setCategory(null);
    }
  };

  const handleSavePost = async () => {
    const toastConfig = {
      position: toast.POSITION.BOTTOM_CENTER,
      pauseOnHover: false,
      autoClose: 8000,
    };

    setLoading(true);
    console.log("\n\nCONTENT ARRAY:", contentArray, "\n\n");
    const content = JSON.stringify(contentArray);
    const title = postTitle || "Temporary Title";
    const status = 2;

    const data = {
      content,
      status,
      title,
      category: category.value,
      image_url: postImageUrl,
    };

    try {
      const response = await api.post("/posts", data);
      console.log("\n\nSAVE POST RESPONSE:", response.data);

      toast.success("SAVED!", toastConfig);
    } catch (err) {
      console.error("ERROR SAVING POST:", err);
      toast.error("FAILED TO SAVE FOR SOME REASON", toastConfig);
    }

    setLoading(false);
  };

  const handleAddSpace = (heightClass) => {
    const spacer = {
      text: "",
      el: "div",
      classes: [heightClass],
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
    <Box w="100%" px={{ base: "1rem", sm: "4rem" }}>
      <Stack spacing="1rem" mb="1.5rem">
        <Stack direction="row" spacing="1rem" w="100%">
          <ChakraInput
            w="50%"
            placeholder="Post Title"
            onChange={(val) => setPostTitle(val)}
          />
          <ChakraInput
            w="50%"
            placeholder="Image URL"
            onChange={(val) => setPostImageUrl(val)}
          />
        </Stack>
        <Box w="calc(50% - 8px)">
          <Category
            handleChangeCategory={handleChangeCategory}
            category={category}
          />
        </Box>

        <ChakraButton
          colorScheme="blue"
          isDisabled={
            !contentArray.length || !postImageUrl || !postTitle || !category
          }
          onClick={handleSavePost}
          isLoading={loading}
          maxW="max-content"
        >
          Finish & Save Post
        </ChakraButton>
      </Stack>

      <ContentInput ref={contentRef} />

      <ElementOptions onChangeEl={(el) => setSelectedEl(el)} />

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

      <Spacers addSpace={handleAddSpace} />

      <CreatePreview content={contentArray} postTitle={postTitle} />
    </Box>
  );
};

export default CreatePostNew;
