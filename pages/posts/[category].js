import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import PostsPageWrapper from "./PostsPageWrapper";

const PostsCategoryPage = () => {
  const [category, setCategory] = useState("");

  const router = useRouter();

  useEffect(() => {
    const selectedCategory = router.query?.category || "";
    setCategory(selectedCategory);
  }, [router.query.category]);

  return (
    <PostsPageWrapper>
      <div>PostsCategoryPage</div>
      <p>{category}</p>
    </PostsPageWrapper>
  );
};

export default PostsCategoryPage;
