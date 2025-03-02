import SectionTitle from "@/components/SectionTitle";
import Sliders from "./Slider";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      {/* <!-- Blog-Area --> */}
      <section className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Business Insights"
                title="Expert Advisory Articles"
                description="Valuable insights and strategies for buying, selling, and maximizing the value of your business. Our expert team shares knowledge to help you make informed decisions."
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <Sliders />
              <div className="text-center mt-5">
                <Link href="/blog" className="btn btn-lg btn-primary px-5 py-3 fw-bold">
                  View All Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End-Blog-Area -->  */}
    </>
  );
}
