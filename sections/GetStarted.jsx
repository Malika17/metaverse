"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { StartSteps, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

const sellerFeatures = [
  "Zero commission for early sellers — keep 100% of what you earn.",
  "Share your story, market your products, and build trust with customers through your brand page and content.",
  "Reach more customers with secure payments, better visibility, and higher conversion rates on a trusted marketplace.",
];

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/whySell.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className=" flex-[0.75] flex justify-center text-center flex-col text-black"
      >
        <TypingText title="| Why Sell on Lore?" />
        {/* <TitleText title={<>Get Started in Just a Few Steps</>} /> */}
        <div className="mt-[31px] flex flex-col max-w-[700px] gap-[24px]">
          {sellerFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index + 1 < 10 ? "0" : ""}${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
