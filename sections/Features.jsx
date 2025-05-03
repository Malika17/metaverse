"use client";
import React from "react";
import { EmblaCarousel } from "../components";

const Features = () => {
  const slides = [
    {
      imageSrc: "heroUI.png",
      leftText: "Explore a feed tailored to your interests.",
      rightText: "We’ll show you posts from brands and creators you’ll love.",
    },
    {
      imageSrc: "/images/lore2.png",
      leftText: "Tap on posts to view and buy products.",
      rightText: "We make shopping easy, right from the content you love.",
    },
    {
      imageSrc: "/images/lore3.png",
      leftText: "Discover the story behind each brand.",
      rightText: "Follow your favorite creators and explore their products.",
    },
    {
      imageSrc: "/images/lore4.png",
      leftText: "Search posts, products, and brands based on your preferences.",
      rightText: "Search for products, posts, and brands the way you want.",
    },
    {
      imageSrc: "/images/lore5.png",
      leftText: "Add products to your cart directly from posts.",
      rightText: "Complete your purchase with a smooth and secure checkout.",
    },
  ];
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      <EmblaCarousel slides={slides} />
    </section>
  );
};

export default Features;
