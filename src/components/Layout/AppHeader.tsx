import { FiBell } from "react-icons/fi";
import { IoPersonCircle } from "react-icons/io5";
import { RiMenuLine } from "react-icons/ri";

function AppHeader() {
  return (
    <>
      <div className="flex justify-between px-10 py-7">
        <div>
          <RiMenuLine className="size-10" />
        </div>
        <div className="flex gap-8">
          <FiBell className="size-10" />
          <IoPersonCircle className="size-10" />
        </div>
      </div>
    </>
  );
}

export default AppHeader;
