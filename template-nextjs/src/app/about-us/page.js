import Breadcrumbs from "@/components/Breadcrumbs";
import Team from "../Home/Team";

import Service from "../Home/Service";
import About from "../Home/About";

export default function AboutUs() {
  return (
    <>
      <Breadcrumbs
        title="About Us"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        menuLink="about-us"
        menuText="About us"
      />
      <Service />
      <About />
      <Team />
    </>
  );
}
