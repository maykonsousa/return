import { LogoDesktop } from "../LogoDesktop";
import { MenuDesktop } from "./MenuDesktop";

export const MenuContainer = () => {
  return (
    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
      <LogoDesktop />
      <MenuDesktop />
    </div>
  );
};
