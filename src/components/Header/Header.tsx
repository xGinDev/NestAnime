"use client";
import { useDeviceDetector } from "@/hooks/deviceDetector";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";
import { TopBar } from "./TopBar";

export const Header = () => {
  const isMobile = useDeviceDetector();

  if (isMobile === null) {
    return null;
  }

  return (
    <header className={`fixed bottom-0 w-full border-b-2 border-[#6D1D7D] lg:px-2 lg:py-3 lg:p-0 lg:top-0 lg:bottom-auto z-10 bg-black`}>
      <TopBar />
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </header>
  );
};
