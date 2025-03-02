import SectionTitle from "@/components/SectionTitle";

export default function Service() {
  return (
    <>
      {/* <!-- Service Area --> */}
      <section className="service-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle 
                smTitle="Our Expertise"
                title="Professional Services"
                description="We offer comprehensive business solutions to help you navigate complex challenges and achieve sustainable growth for your organization."
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-8 col-md-10 col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <div className="single-service featured-service text-center">
                <h3 className="service-title text-2xl font-bold mb-4">Business Consulting & Strategic Solutions</h3>
                <p className="service-description mb-5">
                  We provide comprehensive strategic guidance to optimize your operations, streamline processes, and drive business growth. 
                  Our expert team analyzes your unique business challenges and develops tailored solutions for long-term success. 
                  From strategic acquisitions to exit planning, we partner with you to achieve your business objectives.
                </p>
                <div className="service-btn">
                  <a href="/contact" className="btn">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Service Area --> */}
    </>
  );
} 