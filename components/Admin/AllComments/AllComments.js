import React, { useEffect, useState } from "react";

import api from "utils/api";
// import Comments from "components/Comments";
// import Input from "components/UI/Input";
// import Button from "components/UI/Button";
import Loading from "components/UI/Loading";

const AllComments = () => {
  const [allComments, setAllComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllComments = async () => {
      try {
        const response = await api.get("/comments");
        console.log("ALL COMMENTS (CLIENT):", response);
        setAllComments(response.data.data);
      } catch (e) {
        console.error("FAILED TO FETCH COMMENTS:", e);
      }

      setLoading(false);
    };

    fetchAllComments();
  });

  if (!loading && !allComments.length) {
    return (
      <div className="flex justify-center">
        <p>No Comments</p>
      </div>
    );
  } else if (loading) {
    return <Loading fullScreen />;
  }

  return (
    <div>
      {allComments.map((cmt, i) => {
        return <CommentCard comment={cmt} key={i} />;
      })}
    </div>
  );
};

export default AllComments;

const CommentCard = ({ comment }) => {
  console.log("CMT RCVD:", comment);
  return (
    <div className="flex flex space-x-1">
      <p>attribute</p>
      <p>value</p>
    </div>
  );
};
