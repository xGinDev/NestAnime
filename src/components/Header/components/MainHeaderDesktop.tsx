import React from "react";
import Logo from "./Logo";

const MainHeader = () => {
  return (
    <div className="hidden md:flex md:max-w-7xl md:mx-auto">
      <Logo />
    </div>
  );
};

export default MainHeader;
