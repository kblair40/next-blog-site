import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Input, Flex, Box, VStack } from "@chakra-ui/react";

import { postCategories } from "utils/constants";
import EditablePost from "./EditablePost";
// import Statuses from "components/Admin/Statuses";
// import LocalInput from "components/Admin/LocalInput";
import Loading from "components/UI/Loading";
// import Button from "components/UI/Button";
import api from "utils/api";

const AllPosts = () => {
  const [loading, setLoading] = useState(true);
  const [allPostData, setAllPostData] = useState();
  // const [checkedStatuses, setCheckedStatuses] = useState([1, 2]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async (updatedStatuses = null) => {
    try {
      const response = await api.get("/posts", {
        params: {
          limit: "all",
          // statuses: updatedStatuses ? updatedStatuses : checkedStatuses,
        },
      });

      setAllPostData(
        response.data.posts.map((post, i) => {
          return {
            [`${post._id}`]: {
              title: post.title,
              status: post.status,
              created: post.createdAt,
              category: post.category,
              tags: post.tags,
              _id: post._id,
            },
          };
        })
      );
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

  // const handleStatusesChange = async (statuses) => {
  //   setLoading(true);

  //   let newStatuses = [];
  //   statuses.forEach((status, i) => {
  //     const [val, checked] = Object.entries(status)[0];
  //     if (checked) newStatuses.push(parseInt(val));
  //   });

  //   setCheckedStatuses(newStatuses);
  //   await fetchPosts(newStatuses);
  //   setLoading(false);
  // };

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
      {/* <div className="mb-4">
        <Statuses statusOptions={[1, 2]} onChange={handleStatusesChange} />
      </div> */}

      {/* <div className="flex flex-col mb-4">
        <p className="font-semibold text-lg">NOTE: </p>
        <p>Status = 1: Post will be shown on main site</p>
        <p>Status = 2: Post will be hidden from main site</p>
      </div> */}

      {loading ? (
        <Loading fullScreen />
      ) : (
        <div className="flex flex-col space-y-2">
          {allPostData && allPostData.length
            ? allPostData.map((post, i) => {
                const postVal = Object.values(post)[0];
                console.log("POST VAL:", postVal);
                return <EditablePost post={postVal} key={i} />;
              })
            : null}
        </div>
      )}
    </Box>
  );
};

export default AllPosts;
