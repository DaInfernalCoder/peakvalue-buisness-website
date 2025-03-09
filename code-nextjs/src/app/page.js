import Hero from "./Home/Hero";
import About from "./Home/About";
import Service from "./Home/Service";
import Team from "./Home/Team";
import Testimonial from "./Home/Testimonial";
import CallToAction from "@/components/CallToAction";
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
      <CallToAction />
    </>
  );
}
