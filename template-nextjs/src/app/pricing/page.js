import Breadcrumbs from "@/components/Breadcrumbs";
import Pricing from "../Home/Pricing";

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs
        title="Pricing Plan"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore."
        menuLink="pricing"
        menuText="Pricing"
      />
      <Pricing />
    </>
  );
}
