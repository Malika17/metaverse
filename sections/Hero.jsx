"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} ${styles.heroGradient}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Text Section */}
        <div className="flex-2 text-center md:text-left px-2 sm:mt-[-190px]">
          <h1 className="font-Poppins tracking-tighter font-medium text-4xl sm:text-6xl mb-1 p-2">
            Post like Instagram,
          </h1>
          <h1 className="font-Poppins tracking-tighter font-medium text-4xl sm:text-6xl mb-1 p-2">
            Sell like a Marketplace.
          </h1>
          <p className="font-Poppins text-[14px] sm:text-[20px] text-gray-800 m-1 p-2">
            A content-driven marketplace for brands to engage and drive sales.
          </p>
          <button className="font-[Poppins] mt-3 bg-black text-white px-8 py-3 rounded-full text-lg hover:scale-105 hover:bg-black transition-transform duration-300 ease-in-out">
            Join as a Seller
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center ">
          <img
            src="heroui.png"
            alt="App Screenshot"
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto md:max-h-[550px] lg:max-h-[650px] object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
