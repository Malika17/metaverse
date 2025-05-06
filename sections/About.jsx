"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title=" About Lore"
        textStyles="text-center text-black font-poppins"
      />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className=" font-normal sm:text-[32px] font-poppins text-[20px] text-center  mt-[50px] font-poppins  text-black"
      >
        <span className=" text-black ">Lore</span> is a content-first
        marketplace app built for brands and businesses ready to grow. Create
        shoppable posts, tell your brand story, and list products—all in one
        place. With built-in content tools, low commissions, and a trusted
        shopping environment, Lore helps you reach more customers, build
        loyalty, and boost your sales. It's everything a modern brand needs to
        stand out, engage, and scale—without the heavy lifting.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
