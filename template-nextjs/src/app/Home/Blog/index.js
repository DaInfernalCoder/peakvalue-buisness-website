import SectionTitle from "@/components/SectionTitle";
import Sliders from "./Slider";

export default function Blog() {
  return (
    <>
      {/* <!-- Blog-Area --> */}
      <section className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Blog"
                title="latest Articles"
                description="All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
              style={{ position: "relative" }}
            >
              <Sliders />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End-Blog-Area -->  */}
    </>
  );
}
