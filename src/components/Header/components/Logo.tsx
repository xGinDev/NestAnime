import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="font-bold inline-flex text-[#6D1D7D] p-2 md:text-2xl">
        Nest<p className="text-[#eaeae0]">Anime</p>
      </h1>
    </Link>
  );
};

export default Logo;
