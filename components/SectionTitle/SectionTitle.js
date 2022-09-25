import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="h-screen w-60 border flex justify-center items-center">
      <h1 className="rotate-90 text-4xl whitespace-nowrap">{title}</h1>
    </div>
  );
};

export default SectionTitle;
