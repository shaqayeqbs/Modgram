import React from "react";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <header className="bg-[#444B5F] fixed top-0 !right-0  !w-full z-50 py-6  text-white font-extrabold">
      <div className="container flex justify-between">
        {" "}
        <h1 className="text-[32px]">
          <Link to="home" offset={-200}>
            MODGRAM
          </Link>
        </h1>
        <ul className="hidden md:flex mt-2 text-xl">
          <li>
            {" "}
            <Link to="home" offset={-200}>
              خانه
            </Link>
          </li>
          <li>
            <Link to="organizers" offset={-90}>
              برگزار کنندگان
            </Link>
          </li>
          <li>
            <Link to="influencers" offset={-90}>
              کارگاه آموزشی
            </Link>
          </li>
        </ul>
        <div className="-mt-1 cursor-pointer text-xl border-2 rounded-xl py-2 ">
          <Link to="reserve" offset={-90} className="px-6">
            رزرو غرفه{" "}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
