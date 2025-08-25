"use client";
import React from "react";
/* import TopBar from "./components/TopBar"; */
import MainHeaderDesktop from "./components/MainHeaderDesktop";
import MainHeaderMobile from "./components/MainHeaderMobile";
import { useDeviceDetector } from "@/hooks/deviceDetector";

const Header = () => {
  const { isMobile } = useDeviceDetector();
  
  return (
    <header className="fixed bottom-0 md:sticky md:top-0 z-50 w-full border-b-3 border-[#6D1D7D] lg:bg-[#272727] lg:backdrop-blur lg:supports-[backdrop-filter]:bg-[#272727] lg:py-2">
      {/* <TopBar /> */}
      {isMobile ? <MainHeaderMobile /> : <MainHeaderDesktop />}
    </header>
  );
};

export default Header;
