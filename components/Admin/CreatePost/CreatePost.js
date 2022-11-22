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

import { UndoIcon } from "utils/icons";
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

      <Box w="100%" maxW="300px" mb="1rem">
        <ElementOptions onChangeEl={(el) => setSelectedEl(el)} />
      </Box>

      <Flex mb="1rem">
        <ChakraButton
          colorScheme={"blue"}
          size="sm"
          mr="1rem"
          isDisabled={!selectedEl}
          onClick={handleSubmit}
        >
          Add Content
        </ChakraButton>

        <ChakraButton
          onClick={undo}
          size="sm"
          leftIcon={<UndoIcon boxSize="16px" />}
        >
          Undo
        </ChakraButton>
      </Flex>

      <Spacers addSpace={handleAddSpace} />

      <CreatePreview content={contentArray} postTitle={postTitle} />
    </Box>
  );
};

export default CreatePostNew;
