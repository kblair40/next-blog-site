import React from "react";

const TitleSection = ({ sectionTitle }) => {
  return (
    <div className="hidden h-full w-full sm:max-w-[80px] md:max-w-[140px] text-slate-800 sm:flex sm:flex-col sm:items-center sm:justify-center">
      <h1 className="text-2xl sm:text-3xl md:text-5xl -rotate-90 tracking-widest text-center font-light leading-snug">
        {sectionTitle ? sectionTitle.toUpperCase() : ""}
      </h1>
    </div>
  );
};

export default TitleSection;
