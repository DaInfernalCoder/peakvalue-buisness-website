import Breadcrumbs from "@/components/Breadcrumbs";
import Team from "../Home/Team";
import Testimonial from "../Home/Testimonial";

export default function Testimonials() {
  return (
    <>
      <Breadcrumbs
        title="Testimonials"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        menuLink="testimonials"
        menuText="Testimonials"
      />
      <Team />
      <Testimonial />
    </>
  );
}
