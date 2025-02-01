import { FiMenu } from "react-icons/fi";
import Button from "../Common/Button";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function Header() {
  const [droppedDown, setDroppedDown] = useState(false);
  const [menuHidden, setMenuHidden] = useState(true);

  const toggleMenu = () => {
    if (droppedDown) {
      setDroppedDown(!droppedDown);
    } else {
      setMenuHidden(false);
      setDroppedDown(true);
    }
  };

  return (
    <>
      <div className="lg:flex hidden justify-between items-center pt-20 px-24">
        <h1>Hello</h1>
        <div className="lg:flex gap-10 items-center hidden">
          <div className="flex gap-10 text-[18px]">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="flex text-[18px] gap-8">
            <Link to="/login" className="bg-white py-3 px-9 rounded-4xl">
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-orange text-white py-3 px-9 rounded-4xl"
            >
              SignUp
            </Link>
          </div>
        </div>
      </div>

      <div className="py-10 lg:hidden">
        <div className="flex justify-between items-center">
          <h1 className="text-xl">Hello</h1>
          <div onClick={toggleMenu}>
            {!droppedDown ? (
              <FiMenu className="text-orange size-9" />
            ) : (
              <IoClose className="text-orange size-9" />
            )}
          </div>
        </div>

        {!menuHidden && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: droppedDown ? 1 : 0,
              y: droppedDown ? 1 : -10,
            }}
            transition={{
              duration: 0.1,
            }}
            onAnimationComplete={() => {
              if (!droppedDown) {
                setMenuHidden(true);
              }
            }}
            className="gap-10 -mx-7 text-[18px] "
          >
            <a className="block py-3 px-7 text-white border-t-2 bg-blue-950">
              Home
            </a>
            <a className="block py-3 px-7 text-white border-t-2 bg-blue-950">
              About
            </a>
            <a className="block py-3 px-7 text-white border-t-2 bg-blue-950">
              Services
            </a>
            <a className="block py-3 px-7 text-white border-t-2 bg-blue-950">
              Contact
            </a>
            <div className="flex pt-5 text-[18px] justify-center gap-8">
              <Link to="/dashboard" className="bg-white py-3 px-9 rounded-4xl">
                Login
              </Link>
              <Button />
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default Header;
