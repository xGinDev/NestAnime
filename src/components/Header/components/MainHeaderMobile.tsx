import React from "react";
import { BiBookAlt } from "react-icons/bi";
import Logo from "./Logo";

interface DataMobileProps {
    title: string
    icon: any
    url: string
}

const MainHeaderMobile = () => {

  const DataMobile = [
    {
      title: "Manga",
      icon: <BiBookAlt />,
      url: "manga",
    },
    {
      title: "Manga",
      icon: <BiBookAlt />,
      url: "manga",
    },
    {
      title: "Manga",
      icon: <BiBookAlt />,
      url: "manga",
    },
    {
      title: "Manga",
      icon: <BiBookAlt />,
      url: "manga",
    },
    {
      title: "Manga",
      icon: <BiBookAlt />,
      url: "manga",
    },
  ];

  return (
    <div className="p-4 flex justify-around gap-4 bg-black rounded-t-2xl">
      {DataMobile.map((data: DataMobileProps) => (
        <div className="flex flex-col items-center">
            <span>{data.icon}</span>
            <h4>{data.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default MainHeaderMobile;
