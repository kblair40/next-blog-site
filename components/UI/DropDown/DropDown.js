import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";

const options = [
  { label: "Love", href: "/posts/love" },
  { label: "Wedding Planning", href: "/posts/wedding-planning" },
  { label: "Decorating", href: "/posts/decorating" },
  { label: "Travel", href: "/posts/travel" },
  { label: "Gifting", href: "/posts/gifting" },
  { label: "Guests", href: "/posts/guests" },
];

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bodyRef = useRef();

  useEffect(() => {
    bodyRef.current = document.getElementById("layout");
  }, []);

  const borderClasses = [
    "w-8 h-px relative top-px",
    "duration-300 md:group-hover:bg-slate-700",
  ];

  const triggerClasses = classNames([
    "dropdown-toggle px-2 py-2.5 bg-transparent text-slate-700 font-medium",
    "leading-tight rounded cursor-pointer group w-full border-none",
    "transition duration-150 ease-in-out flex flex-col items-center justify-center whitespace-nowrap",
  ]);

  const listClasses = classNames([
    "min-w-max absolute bg-white text-base z-50 float-left py-2",
    "list-none text-left rounded-lg shadow-lg mt-1 m-0 border-none",
    "bg-clip-padding",
  ]);

  const menuClasses = classNames({
    "duration-200": true,
    "opacity-0 -top-2": !isOpen,
    "opacity-100 top-2": isOpen,
  });

  return (
    <div className="flex justify-center">
      <div>
        <div className="relative">
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={triggerClasses}
          >
            Money And...
            <div className={classNames(borderClasses)} />
          </div>

          <div className={menuClasses}>
            <ul className={listClasses}>
              {options.map((option, i) => {
                return <Option option={option} key={i} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;

const Option = ({ option }) => {
  const itemClasses = classNames([
    "dropdown-item text-sm py-2 px-4 block w-full whitespace-nowrap",
    "bg-transparent text-slate-700 hover:bg-slate-100",
  ]);

  return (
    <li>
      <Link href={option.href}>
        <a className={itemClasses} href="#">
          {option.label}
        </a>
      </Link>
    </li>
  );
};
