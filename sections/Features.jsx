"use client";
import React from "react";
import { EmblaCarousel } from "../components";

const Features = () => {
  const slides = [
    {
      imageSrc: "f1.gif",
      leftText: "Personalized feed based on your interests.",
      rightText: "Discover content from brands and creators you like.",
    },
    {
      imageSrc: "f2.gif",
      leftText: "Tap posts to view and buy products directly.",
      rightText: "Shop seamlessly from the content you engage with.",
    },
    {
      imageSrc: "f3.gif",
      leftText: "Learn the story behind each brand.",
      rightText: "Follow creators and explore their products.",
    },
    {
      imageSrc: "f4.gif",
      leftText: "Search products, posts, and brands easily.",
      rightText: "Find what you're looking for with personalized searches.",
    },
    {
      imageSrc: "f5.gif",
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
