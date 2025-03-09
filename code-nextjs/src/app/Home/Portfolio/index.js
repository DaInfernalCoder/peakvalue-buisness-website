import SectionTitle from "@/components/SectionTitle";
import PortfolioTab from "./PortfolioTab";

export default function Portfolio() {
  return (
    <>
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
