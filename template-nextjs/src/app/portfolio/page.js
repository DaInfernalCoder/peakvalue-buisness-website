import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import PortfolioTab from "../Home/Portfolio/PortfolioTab";

export default function portfolio() {
  return (
    <>
      <Breadcrumbs
        title="Portfolio"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        menuLink="portfolio"
        menuText="Portfolio"
      />

      {/* <!-- Portfolio Area --> */}
      <section className="portfolio-area" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Works"
                title="Our Portfolio"
                description="All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
              />
            </div>
          </div>
          <PortfolioTab />
        </div>
      </section>
      {/* <!-- End Portfolio Area -->	 */}
    </>
  );
}
