import { RxHome } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { appContext } from "@/context/Context";
import { SearchMobile } from "../search/SearchMobile";

export const HeaderMobile = () => {
  const { openSearch, setOpenSearch } = appContext();

  return (
    <>
      <div className="flex justify-center items-center gap-4 bg-[#121212] p-4">
        <RxHome size={24} color="#eaeae0" />
        <IoIosSearch
          size={24}
          color="#eaeae0"
          onClick={() => setOpenSearch(!openSearch)}
        />
        <MdFavoriteBorder size={24} color="#eaeae0" />
      </div>
      {openSearch && <SearchMobile />}
    </>
  );
};
