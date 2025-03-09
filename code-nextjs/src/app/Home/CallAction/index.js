import Link from "next/link";
import bgImg from "../../../../public/images/next-bg.jpg";

export default function CallAction() {
  return (
    <>
      {/* <!-- CTA Section --> */}
      <section
        className="cta-section"
        style={{
          backgroundImage: `url(${bgImg.src})`
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12 mx-auto text-center">
              <div className="cta-content">
                <h3>Evaluate Your Business Today!</h3>
                <p>
                  If you want to sell your business, do not hesitate to contact us today. 
                </p>
                <div className="cta-button">
                  <Link href="/contact" className="theme-btn">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End CTA Section --> */}
    </>
  );
}
