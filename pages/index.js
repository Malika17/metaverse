import { Footer, Navbar } from "../components";

import {
  About,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";
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
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
