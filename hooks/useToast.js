import React from "react";
import toast from "react-hot-toast";

const useToast = () => {
  const notify = () => toast("Here is a toast");
  return <div>useToast</div>;
};

export default useToast;
