import SectionTitle from "@/components/SectionTitle";

export default function FaqBox() {
  return (
    <>
      <section className="faq-box-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Faq"
                title="How Can We Help You?"
                description=" All the lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet."
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-6 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <div className="single-faq-box active">
                <i className="fa fa-question-circle"></i>
                <p>Generals</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-6 wow animate__fadeInUp"
              data-wow-duration="1.2s"
            >
              <div className="single-faq-box">
                <i className="fa fa-bug"></i>
                <p>Packages</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-6 wow animate__fadeInUp"
              data-wow-duration="1.3s"
            >
              <div className="single-faq-box">
                <i className="fa fa-list-alt"></i>
                <p>Supports</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-6 wow animate__fadeInUp"
              data-wow-duration="1.4s"
            >
              <div className="single-faq-box">
                <i className="fa fa-info-circle"></i>
                <p>Consultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
