/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { toast } from "react-toastify";

import LocalInput from "components/Admin/LocalInput";
import Loading from "components/UI/Loading";
import Button from "components/UI/Button";
import api from "utils/api";

const AllPosts = () => {
  const [loading, setLoading] = useState(true);
  const [allPostData, setAllPostData] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");

        setAllPostData(
          response.data.posts.map((post, i) => {
            return {
              [`${post._id}`]: {
                title: post.title,
                status: post.status,
                created: post.createdAt,
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

    fetchPosts();
  }, []);

  const handleChangePostData = (_id, fieldName, value) => {
    console.log("HANDLE CHANGE RCVD:", { _id, fieldName, value });
    let postDataCopy = [...allPostData];
    console.log("postDataCopy:", postDataCopy);

    let objectIndex = postDataCopy.findIndex(
      (obj) => Object.keys(obj)[0] === _id
    );

    console.log("FOUND OBJECT:", postDataCopy[objectIndex]);
    postDataCopy[objectIndex][_id][fieldName] = value;
  };

  const handleSubmit = async (_id) => {
    let postDataCopy = [...allPostData];
    let post = postDataCopy.find((obj) => Object.keys(obj)[0] === _id);

    if (post) {
      let postObject = Object.values(post)[0];

      try {
        // const response = await api.patch(`/posts/${postObject._id}`, {
        //   title: postObject["title"],
        //   status: postObject["status"],
        // });
        await api.patch(`/posts/${postObject._id}`, {
          title: postObject["title"],
          status: postObject["status"],
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

  if (loading) {
    return <Loading fullScreen />;
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  const textClasses = classNames(["font-semibold w-16 text-sm"]);

  return (
    <div>
      <div className="flex flex-col mb-4">
        <p className="font-semibold text-lg">NOTE: </p>
        <p>Status = 1: Post will be shown on main site</p>
        <p>Status = 2: Post will be hidden from main site</p>
      </div>
      <div className="flex flex-col space-y-2">
        {allPostData && allPostData.length
          ? allPostData.map((post, i) => {
              // console.log("\n\nPOST:", post, "\n\n");
              const postVal = Object.values(post)[0];
              return (
                <div key={i}>
                  <div className="flex space-x-8">
                    <div className="p-4 rounded-md border border-slate-300 space-y-2">
                      <div className="flex space-x-2 items-center">
                        <p className={textClasses}>Title:</p>
                        <LocalInput
                          defaultValue={postVal.title}
                          onChange={(e) =>
                            handleChangePostData(
                              postVal._id,
                              "title",
                              e.target.value
                            )
                          }
                        />
                      </div>

                      <div className="flex space-x-2 items-center">
                        <p className={textClasses}>Status:</p>
                        <LocalInput
                          defaultValue={postVal.status}
                          onChange={(e) =>
                            handleChangePostData(
                              postVal._id,
                              "status",
                              e.target.value
                            )
                          }
                        />
                      </div>

                      <div className="flex space-x-2 items-center pt-1">
                        <p className={textClasses}>Created:</p>
                        <p className="text-sm">{formatDate(postVal.created)}</p>
                      </div>

                      <div className="flex space-x-2 items-center pt-1 pb-4">
                        <p className="text-xs text-slate-400">_id:</p>
                        <p className="text-xs text-slate-400">{postVal._id}</p>
                        <p className="text-xs text-slate-400">
                          (don't worry about this)
                        </p>
                      </div>

                      <Button
                        size="sm"
                        onClick={() => handleSubmit(postVal._id)}
                      >
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default AllPosts;

// const LocalInput = ({ defaultValue, onChange, type = "text" }) => {
//   const inputClasses = ["rounded-md h-10 border border-slate-200 px-2 text-sm"];

//   return (
//     <input
//       type={type}
//       className={classNames(inputClasses)}
//       defaultValue={defaultValue}
//       onChange={onChange}
//     />
//   );
// };
