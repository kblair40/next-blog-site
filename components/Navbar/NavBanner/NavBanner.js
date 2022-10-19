import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

const NavBanner = () => {
  const { query } = useRouter();

  let currentPage = query?.category || "";
  let postId = query?.id;
  // console.log("\nPOST ID:", postId, "\n");

  console.log("PAGE META:", { currentPage, postId });

  const activeNavButton = "#414b3b";
  const inactiveNavButton = "#757575";

  const wrapperClasses = classNames({
    "hidden md:flex md:flex-col fixed -top-px left-5 items-center h-[640px] w-[115px]": true,
    "!hidden": Boolean(postId),
    // !Boolean(postId) && currentPage === "",
    // "hidden md:flex md:flex-col fixed -top-px left-5 items-center h-[640px] w-[115px]":
    //   !Boolean(postId) && Boolean(currentPage),
    // hidden: Boolean(postId) || (!postId && !currentPage),
  });

  return (
    <div className={wrapperClasses}>
      <BannerNav />

      <div className="absolute flex flex-col items-center space-y-4 mt-4">
        <NavButton isActive={currentPage === "style"}>
          <Link href="/">
            <a className="z-30">
              <HomeIcon
                fill={currentPage === "" ? activeNavButton : inactiveNavButton}
              />
            </a>
          </Link>
        </NavButton>

        <NavButton label="Style" isActive={currentPage === "style"}>
          <Link href="/posts/style">
            <a className="z-30">
              <ShirtIcon
                fill={
                  currentPage === "style" ? activeNavButton : inactiveNavButton
                }
              />
            </a>
          </Link>
        </NavButton>

        <NavButton label="Love" isActive={currentPage === "love"}>
          <Link href="/posts/love">
            <a className="z-30">
              <HeartIcon
                fill={
                  currentPage === "love" ? activeNavButton : inactiveNavButton
                }
              />
            </a>
          </Link>
        </NavButton>

        <NavButton label="Travel" isActive={currentPage === "travel"}>
          <Link href="/posts/travel">
            <a className="z-30">
              <PlaneIcon
                fill={
                  currentPage === "travel" ? activeNavButton : inactiveNavButton
                }
              />
            </a>
          </Link>
        </NavButton>

        <NavButton label="Hungry" isActive={currentPage === "hunger"}>
          <Link href="/posts/hunger">
            <a className="z-30">
              <FoodIcon
                fill={
                  currentPage === "hunger" ? activeNavButton : inactiveNavButton
                }
              />
            </a>
          </Link>
        </NavButton>
      </div>
    </div>
  );
};

export default NavBanner;

const NavButton = ({ label, isActive, children }) => {
  return (
    <div className="flex w-[116px] flex-col items-center font-semibold relative z-30">
      {children}
      {label && (
        <p className={label === "Hungry" ? "pt-1" : "-mt-1"}>{label}</p>
      )}

      {isActive && (
        <div className="flex justify-between absolute z-20 w-full h-full border-l border-r border-darkgreen" />
      )}
    </div>
  );
};

const BannerNav = () => {
  return (
    <svg
      className="drop-shadow-xl"
      width="115"
      height="640"
      viewBox="0 0 115 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57.1983 596.101L0.5 638.995V0.5H114.5V638.995L57.8017 596.101L57.5 595.873L57.1983 596.101Z"
        fill="white"
        stroke="#414B3B"
      />
    </svg>
  );
};

const ShirtIcon = ({ fill = "black" }) => {
  return (
    <svg
      className="z-10 scale-75"
      width="94"
      height="94"
      viewBox="0 0 94 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M58.7501 15.6667L82.2501 23.5001V43.0834H70.5001V74.4167C70.5001 75.4555 70.0875 76.4517 69.353 77.1863C68.6184 77.9208 67.6222 78.3334 66.5835 78.3334H27.4168C26.378 78.3334 25.3818 77.9208 24.6473 77.1863C23.9128 76.4517 23.5001 75.4555 23.5001 74.4167V43.0834H11.7501V23.5001L35.2501 15.6667C35.2501 18.783 36.4881 21.7717 38.6916 23.9753C40.8952 26.1788 43.8838 27.4167 47.0001 27.4167C50.1164 27.4167 53.1051 26.1788 55.3086 23.9753C57.5122 21.7717 58.7501 18.783 58.7501 15.6667Z"
        stroke={fill}
        strokeWidth="9.26231"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const HeartIcon = ({ fill = "black" }) => {
  return (
    <svg
      className="z-10 scale-75"
      width="94"
      height="94"
      viewBox="0 0 94 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M76.3751 53.1572L47.0001 82.2502L17.6251 53.1572M17.6251 53.1572C15.6876 51.2717 14.1614 49.0056 13.1427 46.5013C12.124 43.9971 11.6348 41.3091 11.706 38.6065C11.7772 35.9039 12.4072 33.2454 13.5563 30.7982C14.7054 28.3511 16.3488 26.1684 18.3829 24.3876C20.4171 22.6068 22.7979 21.2664 25.3755 20.451C27.953 19.6355 30.6716 19.3625 33.3598 19.6493C36.0481 19.9361 38.6478 20.7763 40.9954 22.1172C43.3429 23.4581 45.3874 25.2705 47.0001 27.4403C48.6198 25.2863 50.6667 23.4897 53.0126 22.163C55.3585 20.8364 57.9531 20.0083 60.6338 19.7305C63.3145 19.4526 66.0237 19.7311 68.5918 20.5485C71.1599 21.3659 73.5317 22.7046 75.5587 24.4808C77.5857 26.2569 79.2242 28.4324 80.3718 30.8709C81.5193 33.3095 82.1512 35.9586 82.2278 38.6526C82.3045 41.3466 81.8242 44.0274 80.8171 46.5272C79.8101 49.0271 78.2978 51.2921 76.3751 53.1807"
        stroke={fill}
        strokeWidth="9.26231"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const PlaneIcon = ({ fill = "black" }) => {
  return (
    <svg
      className="z-10 scale-75"
      width="94"
      height="94"
      viewBox="0 0 94 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M62.6666 39.1667H78.3333C80.4108 39.1667 82.4032 39.992 83.8723 41.461C85.3413 42.93 86.1666 44.9225 86.1666 47C86.1666 49.0775 85.3413 51.07 83.8723 52.539C82.4032 54.008 80.4108 54.8333 78.3333 54.8333H62.6666L46.9999 82.25H35.2499L43.0833 54.8333H27.4166L19.5833 62.6667H7.83325L15.6666 47L7.83325 31.3333H19.5833L27.4166 39.1667H43.0833L35.2499 11.75H46.9999L62.6666 39.1667Z"
        stroke={fill}
        strokeWidth="9.26231"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const FoodIcon = ({ fill = "black" }) => {
  return (
    <svg
      className="z-10 scale-90"
      width="68"
      height="81"
      viewBox="0 0 68 81"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={fill}
        d="M29.536 23.1778H20.7016V2.56433H14.812V23.1778H5.9777V2.56433H0.0881348V25.3864C0.0881348 33.7615 6.46635 40.7348 14.812 42.0824V80.6011H20.7016V42.0824C29.0473 40.7348 35.4255 33.7615 35.4255 25.3864V2.56433H29.536V23.1778ZM17.7568 36.4293C12.6382 36.4293 8.27389 33.3517 6.65316 29.0674H28.8605C27.2398 33.3517 22.8754 36.4293 17.7568 36.4293Z"
      />
      <path
        stroke={fill}
        d="M64.4257 1.12633C58.4011 2.05313 52.9073 5.10584 48.9383 9.73206C44.9694 14.3583 42.7876 20.2524 42.7876 26.3478V57.0428H61.9287V80.601H67.8183V0.60437L64.4257 1.12633ZM61.9287 51.1532H48.6772V26.3478C48.657 22.253 49.9261 18.2556 52.3045 14.9222C54.6829 11.5887 58.05 9.08834 61.9287 7.77528V51.1532Z"
      />
    </svg>
  );
};

const HomeIcon = ({ fill = "black" }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H3L12 3L21 12H19"
        stroke={fill}
        strokeWidth="2.95939"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12"
        stroke={fill}
        strokeWidth="2.95939"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.5304 13 14.0391 13.2107 14.4142 13.5858C14.7893 13.9609 15 14.4696 15 15V21"
        stroke={fill}
        strokeWidth="2.95939"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
