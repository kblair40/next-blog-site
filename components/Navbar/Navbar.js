import React from "react";
import Link from "next/link";

const Navbar = ({ activePage }) => {
  return (
    <div className="py-2 px-4 flex items-center justify-end space-x-6 font-medium">
      <p className="pr-2 font-normal">Money and...</p>

      <Link href="/posts/love">
        <a className="">Love</a>
      </Link>
      <Link href="/posts/style">
        <a className="">Style</a>
      </Link>
      <Link href="/posts/travel">
        <a className="">Travel</a>
      </Link>
      <Link href="/posts/hunger">
        <a className="">Hunger</a>
      </Link>
    </div>
  );
};

export default Navbar;
