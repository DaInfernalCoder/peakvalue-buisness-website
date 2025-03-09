import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonial from "../Home/Testimonial";

export default function Testimonials() {
  return (
    <>
      <Breadcrumbs
        title="Testimonials"
        description="Discover what our valued clients have to say about their experience working with us."
        menuLink="testimonials"
        menuText="Testimonials"
      />
      <Testimonial />
    </>
  );
}
