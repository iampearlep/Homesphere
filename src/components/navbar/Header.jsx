import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { HiMenu } from "react-icons/hi";
import MobileNav from "./MobileNav";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <header className="py-6 bg-black text-white px-6">
      <div className="mx-auto container">
        <div className="flex items-center justify-between md:px-24">
          <h1 className="text-2xl font-semibold tracking-wide">Homesphere.</h1>

          <Navbar />

          {/* mobile nav functionality */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="lg:hidden text-3xl cursor-pointer"
          />

          <div className={`${navMobile ? "-right-0" : "-right-full"} toggle `}>
            <MobileNav setNavMobile={setNavMobile} />
          </div>

          {/* mobile nav ends */}
        </div>
      </div>
    </header>
  );
};

export default Header;
