import React from "react";

const Loading = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin stroke-red-400"
    >
      <circle
        cx="24"
        cy="24"
        r="22"
        fill="none"
        stroke="black"
        stroke-width="4"
      />
      <path
        d="M36.9561 6.2197C39.7578 8.26126 42.0375 10.936 43.6091 14.0259C45.1808 17.1158 46 20.5334 46 24"
        stroke-width="4"
      />
    </svg>
  );
};

export default Loading;
