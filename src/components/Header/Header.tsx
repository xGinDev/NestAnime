import { HeaderDesktop } from "./HeaderDesktop";
import { TopBar } from "./TopBar";

export const Header = () => {
  return (
    <header className="border-b-2 border-[#6D1D7D]">
      <TopBar />
      <HeaderDesktop />
    </header>
  );
};
