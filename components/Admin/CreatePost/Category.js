import React from "react";
import CreatableSelect from "react-select/creatable";
import { Box } from "@chakra-ui/react";

import { postCategories } from "utils/constants";

const Category = ({ handleChangeCategory, category }) => {
  return (
    // <React.Fragment>
    <Box w="100%">
      <CreatableSelect
        isClearable
        // className=""
        placeholder="Post Category"
        onChange={(cat) =>
          handleChangeCategory({ custom: false, category: cat })
        }
        onCreateOption={(cat) =>
          handleChangeCategory({ custom: true, category: cat })
        }
        value={category}
        options={postCategories}
      />
    </Box>
    // </React.Fragment>
  );
};

export default Category;
