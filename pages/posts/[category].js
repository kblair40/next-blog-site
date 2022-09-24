import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const PostsCategoryPage = () => {
  const [category, setCategory] = useState("");

  const router = useRouter();

  useEffect(() => {
    const selectedCategory = router.query?.category || "";
    setCategory(selectedCategory);
  }, [router.query.category]);

  return <div>PostsCategoryPage</div>;
};

export default PostsCategoryPage;
