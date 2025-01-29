import { FiBell } from "react-icons/fi";
import { IoPersonCircle } from "react-icons/io5";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { useSidebar } from "../hooks/useSidebar";

function AppHeader() {
  const { setIsOpen, isOpen } = useSidebar();

  return (
    <>
      <div className="absolute shadow-sm z-50 bg-white w-full flex justify-between px-7 py-3">
        <div onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <RiMenuLine className="size-7" />
          ) : (
            <RiCloseLine className="size-7" />
          )}
        </div>
        <div className="flex gap-8">
          <FiBell className="size-7" />
          <IoPersonCircle className="size-7" />
        </div>
      </div>
    </>
  );
}

export default AppHeader;
