import { useState, useRef } from "react";
import {
  Flex,
  Text,
  Button,
  ButtonGroup,
  Input,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import CreatableSelect from "react-select/creatable";
import { useRouter } from "next/router";

import api from "utils/api";
import { postCategories } from "utils/constants";

const EditablePost = ({ post }) => {
  // const [postData, setPostData] = useState(post);
  const [title, setTitle] = useState(post.title);
  const [status, setStatus] = useState(post.status);
  const [category, setCategory] = useState(post.category);
  const [patchingFeatured, setPatchingFeatured] = useState(false);
  const [saving, setSaving] = useState(false);

  const isFeatured = useRef(post.featured);
  console.log("IS FEATURED:", isFeatured.current);

  const initialData = useRef(post);

  const router = useRouter();

  const labelWidth = "70px";

  const handleClickEdit = () => {
    router.push(`/edit-post/${post._id}`);
  };

  const handleClickMakeFeatured = async () => {
    setPatchingFeatured(true);
    try {
      const response = await api.patch("/featured-post", {
        id: post._id,
      });
      console.log("PATCH FEATURED RESPONSE:", response.data);
    } catch (e) {
      console.log("FAILED TO MAKE FAVORITE POST:", e);
    }
    setPatchingFeatured(false);
  };

  const handleClickSave = async () => {
    //
  };

  return (
    <VStack align="start">
      <Flex align="center">
        <Text fontWeight="500" w={labelWidth} minW={labelWidth} fontSize="sm">
          Title
        </Text>

        <Input
          size="sm"
          maxW="300px"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </Flex>

      <Flex align="center">
        <Text fontWeight="500" minW={labelWidth} w={labelWidth} fontSize="sm">
          Status
        </Text>

        <NumberInput
          size="sm"
          maxW="100px"
          minW="80px"
          value={status}
          min={1}
          max={4}
          onChange={(val) => setStatus(val)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>

      <Flex align="center">
        <Text fontWeight="500" minW={labelWidth} w={labelWidth} fontSize="sm">
          Category
        </Text>
        <CreatableSelect
          placeholder="Post Category"
          onChange={(cat) => setCategory(cat.value)}
          value={{
            label: category,
            value: category,
          }}
          options={postCategories}
        />
      </Flex>

      <ButtonGroup size="sm" mt="8px">
        <Button onClick={handleClickSave} isLoading={saving}>
          Save Changes
        </Button>
        <Button onClick={handleClickEdit}>Edit Post</Button>
        <Button isLoading={patchingFeatured} onClick={handleClickMakeFeatured}>
          Make Featured Post
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default EditablePost;
