"use client";
import React from "react";
import TopBar from "./components/TopBar";
import MainHeaderDesktop from "./components/MainHeaderDesktop";
import MainHeaderMobile from "./components/MainHeaderMobile";
import { useDeviceDetector } from "@/hooks/deviceDetector";

const Header = () => {
  const { isMobile } = useDeviceDetector();
  
  return (
    <header className="fixed bottom-0 md:sticky md:top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <TopBar />
      {isMobile ? <MainHeaderMobile /> : <MainHeaderDesktop />}
    </header>
  );
};

export default Header;
