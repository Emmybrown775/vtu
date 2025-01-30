import { useState, ReactNode } from "react";
import { SidebarContext } from "../context/SidebarContext";

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  return (
    <SidebarContext.Provider
      value={{ isOpen, setIsOpen, isHidden, setIsHidden }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
