import { Navbar, Footer } from "../components";

import { About, GetStarted, Hero, Insights, World } from "../sections";
import Features from "../sections/Features";

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />

    <Hero />
    <div className="relative">
      <About />
      <Features />

      <div className="gradient-03 z-0" />
      {/* <Explore /> */}
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      {/* <WhatsNew /> */}
    </div>
    <Insights />
    <World />
    <div className="relative">
      <div className="gradient-04 z-0" />
      {/* <Feedback /> */}
    </div>
    <Footer />
  </div>
);

export default Home;
