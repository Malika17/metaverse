"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../utils/supabaseClient";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setSuccess(null);

    const { name, email, message } = formData;

    const { error: supabaseError } = await supabase
      .from("contact_table")
      .insert([{ name, email, message }]);

    setLoading(false);

    if (supabaseError) {
      setError("There was an error submitting the form.");
    } else {
      setSuccess("Your message has been submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <motion.section
      id="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative bg-black flex justify-center items-center`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex flex-col items-center gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Get in Touch
          </h4>
          <p className="text-center font-normal text-[16px] text-white opacity-70">
            We're here to help. Reach out to us via the form below or through
            any of the contact options.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {success && <p className="text-green-500 text-center">{success}</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto space-y-4"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="p-4 rounded-[10px] text-black"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-white">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="p-4 rounded-[10px] text-black"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-white">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="4"
                className="p-4 rounded-[10px] text-black"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#25618B] rounded-[32px] text-white font-bold"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="mt-4 text-center">
          <p className="text-white sm:text-[2em]">
            Reach us at <br />
            loreappmarketplace@gmail.com
          </p>
        </div>

        <div className="mt-10 flex justify-between items-center text-white" />
      </div>
    </motion.section>
  );
};

export default Contact;
