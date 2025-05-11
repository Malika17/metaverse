"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    className={`${styles.xPaddings} py-4 sm:py-8 relative`}
  >
    <div className="absolute sm:w-[50%] w-[150%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-4 sm:gap-8`}
    >
      <h2 className="text-[24px] sm:text-[30px] font-trochut">LORE</h2>
      <img
        src="/search.svg"
        alt="search"
        className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] object-contain"
      />
      <button
        onClick={() => {
          const contactSection = document.getElementById("footer");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="font-poppins sm:text-[20px] text-[10px] tracking-normal text-white bg-black py-2 px-4 sm:py-2 sm:px-6 rounded-full hover:bg-gray-800 transition duration-300"
      >
        Contact Us
      </button>
    </div>
  </motion.nav>
);

export default Navbar;
