"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    className={`${styles.xPaddings} py-8 relative `}
  >
    <div className="absolute sm:w-[50%] w-[150%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <h2 className="text-[30px]  font-trochut">LORE</h2>
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />

      <button className=" font-poppins tracking-tight ">contact us</button>
    </div>
  </motion.nav>
);

export default Navbar;
