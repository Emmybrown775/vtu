import { useState } from "react";
import { IconType } from "react-icons";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "motion/react";

interface SideBarLinkProps {
  title: string;
  icon: IconType;
  dropDown?: boolean;
  dropDownItems?: Array<string>;
}

function SideBarLink({
  title,
  icon: Icon,
  dropDown = false,
  dropDownItems,
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
        <div className="flex items-center gap-3 px-5 py-3 rounded-sm">
          <Icon className="size-4 text-white" />
          <h1 className="text-white text-base">{title}</h1>
        </div>
      ) : (
        <div className="border-t-2 border-b-2 my-3 border-white">
          <div
            onClick={toggleMenu}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-3 px-5 py-5  rounded-sm">
              <Icon className="size-4 text-white" />
              <h1 className="text-white text-base">{title}</h1>
            </div>
            <div>
              {!droppedDown ? (
                <FaChevronDown className="size-4 text-white" />
              ) : (
                <FaChevronUp className="size-4 text-white" />
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
                  <li className="text-white py-2  text-base" key={index}>
                    {text}
                  </li>
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
