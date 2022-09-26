import React from "react";

const TitleSection = ({ sectionTitle }) => {
  return (
    <div className="h-full w-full max-w-[140px] text-slate-800 flex flex-col items-center justify-center">
      <h1 className="text-5xl -rotate-90 tracking-widest text-center font-light leading-snug">
        {sectionTitle ? sectionTitle.toUpperCase() : ""}
      </h1>
    </div>
  );
};

export default TitleSection;
