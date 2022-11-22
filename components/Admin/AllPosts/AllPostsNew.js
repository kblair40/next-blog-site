import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Box, VStack, StackDivider } from "@chakra-ui/react";

import EditablePost from "./EditablePost";
import Loading from "components/UI/Loading";
import api from "utils/api";

const AllPosts = () => {
  const [loading, setLoading] = useState(true);
  const [allPostData, setAllPostData] = useState();
  const [featuredPostId, setFeaturedPostId] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    if (!loading) setLoading(true);
    try {
      const response = await api.get("/posts", {
        params: {
          limit: "all",
        },
      });

      let allData = [];
      response.data.posts.forEach((post) => {
        let postObj = {
          [`${post._id}`]: {
            title: post.title,
            status: post.status,
            created: post.createdAt,
            category: post.category,
            tags: post.tags,
            featured: post.featured,
            preview_text: post.preview_text,
            _id: post._id,
          },
        };

        allData.push(postObj);
        if (post.featured) {
          setFeaturedPostId(post._id);
        }
      });

      setAllPostData(allData);
    } catch (e) {
      console.error("FAILED TO FETCH ALL POSTS:", e);
    }

    setLoading(false);
  };

  const handleChangePostData = (_id, fieldName, value) => {
    let postDataCopy = [...allPostData];

    let objectIndex = postDataCopy.findIndex(
      (obj) => Object.keys(obj)[0] === _id
    );

    postDataCopy[objectIndex][_id][fieldName] = value;
    setAllPostData(postDataCopy);
  };

  const handleSubmit = async (_id) => {
    let postDataCopy = [...allPostData];
    let post = postDataCopy.find((obj) => Object.keys(obj)[0] === _id);

    if (post) {
      let postObject = Object.values(post)[0];

      try {
        await api.patch(`/posts/${postObject._id}`, {
          title: postObject["title"],
          status: postObject["status"],
          category: postObject["category"],
          tags: postObject["tags"],
        });

        const config = {
          position: toast.POSITION.BOTTOM_CENTER,
          pauseOnHover: false,
        };
        toast.success("Changes saved!", config);
      } catch (e) {
        console.log("FAILED PATCHING POST" + postObject, "   ", e);
      }
    } else {
      console.error("COULD NOT FIND POST");
    }
  };

  return (
    <Box>
      {loading ? (
        <Loading fullScreen />
      ) : (
        <VStack
          spacing="1rem"
          align="start"
          divider={<StackDivider borderColor="gray.400" />}
        >
          {allPostData && allPostData.length
            ? allPostData.map((post, i) => {
                const postVal = Object.values(post)[0];
                // console.log("POST VAL:", postVal);
                return (
                  <EditablePost
                    onChangeFeaturedPost={(id) => setFeaturedPostId(id)}
                    isFeatured={postVal._id === featuredPostId}
                    post={postVal}
                    fetchPosts={fetchPosts}
                    key={i}
                  />
                );
              })
            : null}
        </VStack>
      )}
    </Box>
  );
};

export default AllPosts;
