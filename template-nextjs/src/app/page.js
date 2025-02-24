import Hero from "./Home/Hero";
import About from "./Home/About";
import Service from "./Home/Service";
import Team from "./Home/Team";
import Testimonial from "./Home/Testimonial";
import Pricing from "./Home/Pricing";
import CallAction from "./Home/CallAction";
import Contact from "./Home/Contact";
import Client from "./Home/Client";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Team />
      <Testimonial />
      <Contact />
      <Client />
      <CallAction />
    </>
  );
}
