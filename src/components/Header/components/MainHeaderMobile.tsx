import React from "react";
import { BiBookAlt } from "react-icons/bi";
import { MdSchedule } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";
import Link from "next/link";

interface DataMobileProps {
    title: string
    icon: any
    url: string
}

const MainHeaderMobile = () => {

  const DataMobile = [
    {
      title: "Manga",
      icon: <BiBookAlt size={24}/>,
      url: "/manga",
    },
    {
      title: "Schedule",
      icon: <MdSchedule size={24}/>,
      url: "/schedule",
    },
    {
      title: "Home",
      icon: <IoHomeOutline size={24}/>,
      url: "/",
    },
    {
      title: "Search",
      icon: <GoSearch size={24}/>,
      url: "/search",
    },
    {
      title: "Favorites",
      icon: <IoBookmarkOutline size={24}/>,
      url: "/favorites",
    },
  ];

  return (
    <div className="p-4 flex justify-around gap-4 bg-black rounded-t-2xl text-white">
      {DataMobile.map((data: DataMobileProps, index: number) => (
        <Link href={data.url} className="flex flex-col items-center gap-1" key={index}>
            <span>{data.icon}</span>
            <h4 className="text-xs">{data.title}</h4>
        </Link>
      ))}
    </div>
  );
}; 

export default MainHeaderMobile;
