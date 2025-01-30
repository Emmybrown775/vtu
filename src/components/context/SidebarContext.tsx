import { createContext } from "react";

export const SidebarContext = createContext<{
  isOpen: boolean;
  isHidden: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setIsHidden: (isHidden: boolean) => void;
}>({
  isOpen: false,
  setIsOpen: () => {},
  isHidden: true,
  setIsHidden: () => {},
});
