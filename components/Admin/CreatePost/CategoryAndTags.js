import React from "react";
import CreatableSelect from "react-select/creatable";

import { postCategories } from "utils/constants";

const CategoryAndTags = ({
  handleChangeCategory,
  handleChangeTags,
  tags,
  category,
}) => {
  return (
    <React.Fragment>
      <CreatableSelect
        isClearable
        className="w-1/2"
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

      <CreatableSelect
        isClearable
        isMulti
        className="w-1/2"
        placeholder="Tags"
        onChange={(tag) => handleChangeTags({ custom: false, tags: tag })}
        onCreateOption={(tag) => handleChangeTags({ custom: true, tags: tag })}
        value={tags}
        options={[]}
      />
    </React.Fragment>
  );
};

export default CategoryAndTags;
