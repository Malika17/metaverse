"use client";
import React from "react";
import { EmblaCarousel } from "../components";

const Features = () => {
  const slides = [
    {
      videoSrc:
        "https://res.cloudinary.com/drx7etx5m/video/upload/f_auto:video,q_auto/xsegwlendnp8lto5mkuo",
      leftText: "Personalized feed based on your interests.",
      rightText: "Discover content from brands and creators you like.",
    },
    {
      videoSrc:
        "https://res.cloudinary.com/drx7etx5m/video/upload/f_auto:video,q_auto/vtmkedosewdh5v4e2dcf",
      leftText: "Tap posts to view and buy products directly.",
      rightText: "Shop seamlessly from the content you engage with.",
    },
    {
      videoSrc:
        "https://res.cloudinary.com/drx7etx5m/video/upload/f_auto:video,q_auto/yhnmxbhhqep34oi3x77r",
      leftText: "Learn the story behind each brand.",
      rightText: "Follow creators and explore their products.",
    },
    {
      videoSrc:
        "https://res.cloudinary.com/drx7etx5m/video/upload/f_auto:video,q_auto/qijzcjuupq2anugmipaf",
      leftText: "Search products, posts, and brands easily.",
      rightText: "Find what you're looking for with personalized searches.",
    },
    {
      videoSrc:
        "https://res.cloudinary.com/drx7etx5m/video/upload/f_auto:video,q_auto/sbgdynzqjtcqc2yitzfs",
      leftText: "Add products to your cart directly from posts.",
      rightText: "Enjoy a fast and secure checkout experience.",
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-2 py-12">
      <EmblaCarousel slides={slides} />
    </section>
  );
};

export default Features;
