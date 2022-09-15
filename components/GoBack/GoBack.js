import React from "react";
import Link from "next/link";
import IconButton from "components/UI/IconButton";

const GoBack = ({ label, route }) => {
  return (
    <Link href={route}>
      <a className="flex items-center mt-2 mb-8 w-fit">
        <IconButton
          icon={
            <svg
              className="w-6 h-6 fill-slate-800"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.3086 17.3867L10.4414 18.2539C10.0742 18.6211 9.48047 18.6211 9.11719 18.2539L1.52344 10.6641C1.15625 10.2969 1.15625 9.70313 1.52344 9.33984L9.11719 1.74609C9.48437 1.37891 10.0781 1.37891 10.4414 1.74609L11.3086 2.61328C11.6797 2.98438 11.6719 3.58984 11.293 3.95312L6.58594 8.4375H17.8125C18.332 8.4375 18.75 8.85547 18.75 9.375V10.625C18.75 11.1445 18.332 11.5625 17.8125 11.5625H6.58594L11.293 16.0469C11.6758 16.4102 11.6836 17.0156 11.3086 17.3867Z" />
            </svg>
          }
        />

        <div className="ml-3 h-full">
          <p className="whitespace-nowrap font-medium text-lg">{label}</p>
        </div>
      </a>
    </Link>
  );
};

export default GoBack;
