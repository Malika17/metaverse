"use client";
import React from "react";
import { EmblaCarousel } from "../components";

const Features = () => {
  const slides = [
    {
      videoSrc: "/videos/f1.mp4",
      leftText: "Personalized feed based on your interests.",
      rightText: "Discover content from brands and creators you like.",
    },
    {
      videoSrc: "/videos/f2.mp4",
      leftText: "Tap posts to view and buy products directly.",
      rightText: "Shop seamlessly from the content you engage with.",
    },
    {
      videoSrc: "/videos/f3.mp4",
      leftText: "Learn the story behind each brand.",
      rightText: "Follow creators and explore their products.",
    },
    {
      videoSrc: "/videos/f4.mp4",
      leftText: "Search products, posts, and brands easily.",
      rightText: "Find what you're looking for with personalized searches.",
    },
    {
      videoSrc: "/videos/f5.mp4",
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
