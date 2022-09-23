import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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

  const router = useRouter();

  const currentPath = useRef();

  useEffect(() => {
    // closes menu if user navigates to a different page while the menu is still open
    if (router.pathname !== currentPath.current) {
      setIsOpen(false);

      currentPath.current = router.pathname;
    }
  }, [router.pathname]);

  useEffect(() => {}, [router.pathname]);

  const borderClasses = [
    "w-8 h-px relative top-px",
    "duration-300 md:group-hover:bg-lightgreen",
  ];

  const triggerClasses = classNames([
    "dropdown-toggle px-4 py-2.5 bg-transparent text-slate-700 font-medium",
    "leading-tight rounded cursor-pointer group w-full border-none",
    "transition duration-150 ease-in-out flex flex-col items-center justify-center whitespace-nowrap",
  ]);

  const listClasses = classNames([
    "min-w-max absolute bg-white text-base z-50 float-left py-2",
    "list-none text-left rounded-lg shadow-lg mt-1.5 border-none",
    "bg-clip-padding",
  ]);

  const menuClasses = classNames({
    "duration-200": true,
    "opacity-0 -top-2": !isOpen,
    "opacity-100 top-2": isOpen,
  });

  const arrowClasses = classNames({
    "duration-200 w-2.5 h-2.5": true,
    "rotate-180": isOpen,
  });

  return (
    <div className="flex justify-center">
      <div>
        <div className="relative">
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={triggerClasses}
          >
            <div className="flex items-center space-x-2">
              <p className="duration-300 hover:text-lightgreen">Posts</p>

              <svg
                className={arrowClasses}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2045 17.8817L2.09466 8.77181C1.6553 8.33245 1.6553 7.62014 2.09466 7.18083L3.15717 6.11831C3.59578 5.6797 4.30664 5.67886 4.74628 6.11644L12 13.3362L19.2537 6.11644C19.6933 5.67886 20.4042 5.6797 20.8428 6.11831L21.9053 7.18083C22.3447 7.62019 22.3447 8.3325 21.9053 8.77181L12.7955 17.8817C12.3562 18.321 11.6438 18.321 11.2045 17.8817Z"
                  fill="#414b3b"
                />
              </svg>
            </div>

            <div className={classNames(borderClasses)} />
          </div>

          {isOpen && (
            <div className={menuClasses}>
              <div
                onClick={() => setIsOpen(false)}
                className="fixed top-14 bottom-0 left-0 right-0 bg-transparent"
              />

              <ul className={listClasses}>
                {options.map((option, i) => {
                  return <Option option={option} key={i} />;
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;

const Option = ({ option }) => {
  let itemClasses = [
    "dropdown-item text-sm text-right py-2 px-4 block w-full whitespace-nowrap",
    "bg-transparent text-slate-700 hover:bg-slate-100",
  ];

  if (!option.isLink) {
    itemClasses.push("");
  }

  itemClasses = classNames(itemClasses);

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
