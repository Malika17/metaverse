"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4 items-center"
  >
    {/* Text Section */}
    <div className="order-1 md:order-none w-full flex justify-between items-start">
      <div className="flex-1 md:ml-[40px] flex flex-col max-w-[800px] text-center md:text-left items-center md:items-start">
        <h4 className="font-semibold lg:text-[40px] text-[24px] text-gray-900">
          {title}
        </h4>
        <p className="mt-4 font-normal lg:text-[18px] text-[14px] text-gray-600">
          {subtitle}
        </p>
      </div>

      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border border-gray-300">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>

    {/* Image Section */}
    <img
      src={imgUrl}
      alt="insight-step"
      className="md:w-[240px] w-full h-[250px] rounded-[32px] object-cover order-2 md:order-none"
    />
  </motion.div>
);

export default InsightCard;
