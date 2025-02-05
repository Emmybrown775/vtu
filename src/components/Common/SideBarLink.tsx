import { useState } from "react";
import { IconType } from "react-icons";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { SidebarDropdownType } from "../../types/types";

interface SideBarLinkProps {
  title: string;
  icon: IconType;
  dropDown?: boolean;
  dropDownItems?: Array<SidebarDropdownType>;
  url?: string;
}

function SideBarLink({
  title,
  icon: Icon,
  dropDown = false,
  dropDownItems,
  url = "/",
}: SideBarLinkProps) {
  const [droppedDown, setDroppedDown] = useState(false);
  const [hidden, setHidden] = useState(true);

  const toggleMenu = () => {
    if (droppedDown) {
      setDroppedDown(!droppedDown);
    } else {
      setHidden(false);
      setDroppedDown(true);
    }
  };

  return (
    <>
      {!dropDown ? (
        <Link
          to={url}
          className="flex hover:bg-blue-50 text-white hover:text-blue-950 items-center gap-3 px-5 py-3 rounded-sm"
        >
          <Icon className="size-4  " />
          <h1 className="  text-base">{title}</h1>
        </Link>
      ) : (
        <div className="border-t-2 border-b-2 my-3 border-white">
          <div
            onClick={toggleMenu}
            className="flex  hover:bg-blue-50 hover:text-blue-950 text-white  justify-between items-center"
          >
            <div className="flex items-center gap-3 px-5 py-5  rounded-sm">
              <Icon className="size-4 " />
              <h1 className=" text-base">{title}</h1>
            </div>
            <div>
              {!droppedDown ? (
                <FaChevronDown className="size-4 " />
              ) : (
                <FaChevronUp className="size-4 " />
              )}
            </div>
          </div>

          {!hidden && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: droppedDown ? 1 : 0,
                y: droppedDown ? 1 : -10,
              }}
              transition={{ duration: 0.1 }}
              onAnimationComplete={() => {
                if (!droppedDown) {
                  setHidden(true);
                }
              }}
            >
              <ul className="pl-16 list-disc pb-3 list-inside">
                {dropDownItems?.map((text, index) => (
                  <Link to={text.url}>
                    <li className="text-white py-2  text-base" key={index}>
                      {text.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      )}
    </>
  );
}
export default SideBarLink;
