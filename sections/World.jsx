"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} h-auto mt-20 relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TitleText
        title={<>Explore, Engage and Shop</>}
        textStyles="text-center"
      />
      <h1 className="text-center font-grey-900 m-2 sm:mt-10 sm:text-2xl text-[16px]">
        Built to align with how consumers shop all over India, Lore offers
        sellers a seamless, intuitive platform for reaching their audience.
      </h1>

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] w-full h-[60vh] sm:h-[80vh] md:h-[90vh] lg:h-[900px]"
      >
        <img src="/map4.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-[20%] right-[60%] w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-[25%] left-[15%] w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-[40%] left-[54%] w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
