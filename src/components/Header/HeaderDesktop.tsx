'use client'
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Link from "next/link";

export const HeaderDesktop = () => {
  return (
    <div className="hidden lg:flex lg:max-w-7xl lg:mx-auto lg:p-4">
      <Link href="/">
        <Image src={Logo} alt="Logo" width={150} height={150} />
      </Link>
    </div>
  );
};
