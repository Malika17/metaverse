import { useState } from "react";
import { supabase } from "../utils/supabaseClient.js";
import { TitleText } from "../components/CustomTexts.jsx";

const RegisterSeller = () => {
  const [form, setForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    brandName: "",
    instaURL: "",
    website: "",
    desc: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);

    try {
      const { error } = await supabase.from("seller_leads").insert([
        {
          fullname: form.fullname,
          phone: form.phone,
          email: form.email,
          brand_name: form.brandName,
          instaURL: form.instaURL,
          website: form.website,
          desc: form.desc,
        },
      ]);

      if (error) throw error;

      setForm({
        fullname: "",
        phone: "",
        email: "",
        brandName: "",
        instaURL: "",
        website: "",
        desc: "",
      });
    } catch (err) {
      console.error("Error submitting form: ", err.message);
    }

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="flex flex-col space-between gap-10 items-center justify-center bg-white font-[Poppins] p-8 m-8">
      <TitleText
        title={<>Pre-register as a Seller</>}
        textStyles="mt-2 text-center text-2xl md:text-4xl"
      />
      <p className="mt-4 sm:mt-[100px] text-gray-600 text-sm text-center p-4">
        We're working hard to bring this app to life! We'll be in touch as soon
        as it's ready. Thank you so much for your patience and interest!
      </p>

      <div className="sm:w-1/2 mt-10 border  bg-gray-50">
        {success && (
          <p className="mb-4 mt-4 text-green-600 text-center">
            Thank you! We’ll contact you soon.
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="h-auto sm:w-[1/2] space-y-4 sm:mt-10"
        >
          <input
            name="fullname"
            placeholder="Full Name"
            required
            value={form.fullname}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-gray-100 px-4 py-2 rounded m-2"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded m-2"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded m-2"
          />
          <input
            name="brandName"
            placeholder="Brand Name"
            value={form.brandName}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded m-2"
          />
          <input
            name="instaURL"
            placeholder="Instagram URL"
            required
            value={form.instaURL}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded m-2"
          />
          <input
            name="website"
            placeholder="Business Website (if any)"
            value={form.website}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded m-2"
          />
          <input
            name="desc"
            placeholder="What do you sell? (One-liner)"
            required
            value={form.desc}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded m-2"
          />
          <div className="w-full h-full flex justify-center">
            <button
              type="submit"
              className="w-[200px] font-[Poppins] mt-3 bg-black text-white px-8 py-3 rounded-full text-lg hover:scale-105 transition-transform duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterSeller;
