/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { toast } from "react-toastify";
import CreatableSelect from "react-select/creatable";
import { Button as ChakraButton, Input, Flex } from "@chakra-ui/react";

import { postCategories } from "utils/constants";
import Statuses from "components/Admin/Statuses";
import LocalInput from "components/Admin/LocalInput";
import Loading from "components/UI/Loading";
import Button from "components/UI/Button";
import api from "utils/api";

const AllPosts = () => {
  const [loading, setLoading] = useState(true);
  const [allPostData, setAllPostData] = useState();
  const [checkedStatuses, setCheckedStatuses] = useState([1, 2]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async (updatedStatuses = null) => {
    try {
      const response = await api.get("/posts", {
        params: {
          statuses: updatedStatuses ? updatedStatuses : checkedStatuses,
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

  const handleStatusesChange = async (statuses) => {
    setLoading(true);

    let newStatuses = [];
    statuses.forEach((status, i) => {
      const [val, checked] = Object.entries(status)[0];
      if (checked) newStatuses.push(parseInt(val));
    });

    setCheckedStatuses(newStatuses);
    await fetchPosts(newStatuses);
    setLoading(false);
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

  const textClasses = classNames(["font-semibold w-16 text-sm"]);

  return (
    <div>
      <div className="mb-4">
        <Statuses statusOptions={[1, 2]} onChange={handleStatusesChange} />
      </div>

      <div className="flex flex-col mb-4">
        <p className="font-semibold text-lg">NOTE: </p>
        <p>Status = 1: Post will be shown on main site</p>
        <p>Status = 2: Post will be hidden from main site</p>
      </div>

      {loading ? (
        <Loading fullScreen />
      ) : (
        <div className="flex flex-col space-y-2">
          {allPostData && allPostData.length
            ? allPostData.map((post, i) => {
                const postVal = Object.values(post)[0];
                console.log("post val:", postVal, "\n");
                return (
                  <div key={i}>
                    <div className="flex space-x-8">
                      <div className="w-full p-4 rounded-md border border-slate-300 space-y-2">
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
                            type="number"
                            max="2"
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

                        <div className="flex space-x-2 items-center">
                          <p className={textClasses}>Category:</p>
                          <CreatableSelect
                            className="w-40"
                            placeholder="Post Category"
                            onChange={(cat) =>
                              handleChangePostData(
                                postVal._id,
                                "category",
                                cat.value
                              )
                            }
                            value={{
                              label: postVal.category,
                              value: postVal.category,
                            }}
                            options={postCategories}
                          />
                        </div>

                        <div className="flex space-x-2 items-center">
                          <p className={textClasses}>Tags:</p>
                          <CreatableSelect
                            isClearable
                            isMulti
                            className="w-80"
                            placeholder="Tags"
                            onChange={(tags) =>
                              // handleChangePostData({ custom: false, tags: tag })
                              handleChangePostData(
                                postVal._id,
                                "tags",
                                tags.map((tag) => tag.value)
                              )
                            }
                            value={postVal.tags.map((tag) => ({
                              label: tag,
                              value: tag,
                            }))}
                            options={[]}
                          />
                        </div>

                        <div className="flex space-x-2 items-center pt-1">
                          <p className={textClasses}>Created:</p>
                          <p className="text-sm">{postVal.created}</p>
                        </div>

                        <div className="flex space-x-2 items-center pt-1 pb-4">
                          <p className="text-xs text-slate-400">_id:</p>
                          <p className="text-xs text-slate-400">
                            {postVal._id}
                          </p>
                          <p className="text-xs text-slate-400">
                            (don't worry about this)
                          </p>
                        </div>

                        <div className="flex space-x-6 items-center">
                          <Button
                            size="sm"
                            onClick={() => handleSubmit(postVal._id)}
                          >
                            Save Changes
                          </Button>

                          <Link
                            legacyBehavior
                            href={`/edit-post/${postVal._id}`}
                          >
                            <a className="font-semibold">Edit Post</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      )}
    </div>
  );
};

export default AllPosts;
