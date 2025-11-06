"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer } from "../utils/motion";
import Link from "next/link";

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
          <h1 className="font-Poppins tracking-tighter font-medium text-[35px] sm:text-4xl sm:mb-1 sm:p-2 lg:text-6xl ">
            Post like Instagram,
          </h1>
          <h1 className="font-Poppins tracking-tighter font-medium text-[33px] sm:mb-1 sm:p-2 sm:text-4xl lg:text-6xl whitespace-nowrap">
            Sell like a Marketplace.
          </h1>
          <p className="font-Poppins text-[14px] sm:mt-5 sm:text-[20px] text-gray-800 m-1 p-2">
            A content-driven marketplace for brands to engage and drive sales.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 mt-3">
            {/* Seller Button */}
            <button className="font-[Poppins] bg-black text-white px-8 py-3 rounded-full text-lg hover:scale-105 hover:bg-black transition-transform duration-300 ease-in-out">
              <Link href="/RegisterSeller">Join as a Seller</Link>
            </button>

            {/* Consumer Early Access Button */}
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLScNtZCXEYd_0OOFX1PDtRF3fe9WXIFNgY19w2dBgsKgsk9X3Q/viewform?usp=sharing&ouid=116675347423943131269",
                  "_blank"
                )
              }
              className="font-[Poppins] border border-black text-black px-8 py-3 rounded-full text-lg hover:scale-105 hover:bg-black hover:text-white transition-transform duration-300 ease-in-out"
            >
              Join Early Access
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="heroui.png"
            alt="App Screenshot"
            className="w-3/4 max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto md:max-h-[550px] lg:max-h-[650px] object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
