"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`mb-7 font-poppins font-normal mt-[8px] font-bold sm:text-[45px] text-[36px]  text-black  ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`font-poppins tracking-tight mt-[8px] font-bold sm:text-3xl md:text-[64px] text-[40px] text-black ${textStyles}`}
  >
    {title}
  </motion.h2>
);
