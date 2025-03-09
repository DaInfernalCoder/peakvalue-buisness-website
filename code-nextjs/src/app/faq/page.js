import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import FaqBox from "./FaqBox";
import FaqMain from "./FaqMain";

export default function Faq() {
  return (
    <>
      <Breadcrumbs
        title="Faq Area"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        menuLink="faq"
        menuText="Faq"
      />
      <FaqBox />
      <FaqMain />
    </>
  );
}
