import React, { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";

import SubscribeModal from "components/SubscribeModal";
import NavLink from "./NavLink";
import links from "./links";

const Navbar = () => {
  const [subscribeModalOpen, setSubscribeModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { query, pathname } = useRouter();
  console.log("\n\nNAV QUERY:", query, "\n\n");

  let currentPage = "";
  if (query && query.category) {
    currentPage = query.category;
  }

  const wrapperClasses = classNames({
    "absolute z-40 top-0 left-4 pt-4 pb-2 pl-0 flex items-center font-medium": true,
    "bg-transparent": true,
    "w-full right-8": Boolean(query.id),
    hidden: !Boolean(query.id),
  });

  const subscribeBtnClasses = classNames({
    "duration-200 hover:text-darkgreen fixed inline-block top-6 md:top-4 cursor-pointer": true,
    "left-4 md:right-6 md:left-auto z-50": true,
    "border border-red-600": false,
  });

  const handleSubscribe = () => {
    const toastConfig = {
      position: toast.POSITION.BOTTOM_CENTER,
      pauseOnHover: false,
      autoClose: 8000,
    };
    toast.success("Successfully subscribed.  Thank you!", toastConfig);
  };

  return (
    <React.Fragment>
      <div
        onClick={() => setSubscribeModalOpen(true)}
        className={subscribeBtnClasses}
      >
        <p className="font-medium text-lg">Subscribe</p>
      </div>
      <div className={wrapperClasses}>
        <div className="hidden md:block">
          <Link href="/">
            <a className="font-light mr-4">Money and...</a>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {links.map((link, idx) => {
            return (
              <NavLink
                key={idx}
                to={link.to}
                label={link.label}
                isActive={link.label.toLowerCase() === currentPage}
              />
            );
          })}
        </div>
      </div>

      <SubscribeModal
        isOpen={subscribeModalOpen}
        onClose={() => setSubscribeModalOpen(false)}
        onSubscribe={handleSubscribe}
      />
    </React.Fragment>
  );
};

export default Navbar;
