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
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="cta-content">
                <h3>Build your Perfect Website Now!</h3>
                <p>
                  If you want to create a new website for your business, do not
                  hesitate to contact us today. We have created you to provide
                  all types of services on the website. and praising pain was
                  born and I will give yomplete acount of the system creatives
                </p>
                <div className="cta-button">
                  <Link href="/contact" className="theme-btn">
                    Get started
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
