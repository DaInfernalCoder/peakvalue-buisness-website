import SectionTitle from "@/components/SectionTitle";
import SingleService from "@/components/SingleService";

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
          <div className="row">
            <div
              className="col-lg-4 col-md-4 col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
            <SingleService
              icon="fa fa-briefcase"
              title="Business Consulting"
              description="Strategic guidance to optimize your operations, streamline processes, and drive business growth. We analyze your business challenges and develop tailored solutions for sustainable success."
              btnURL="contact"
              image="https://images.unsplash.com/photo-1604307743907-df8d5fe9f1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            />
            </div>
            <div
              className="col-lg-4 col-md-4 col-12 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
            <SingleService
              icon="fa fa-handshake-o"
              title="Strategic Acquisitions"
              description="Expert assistance in identifying, evaluating, and executing strategic acquisitions to expand your market presence. We guide you through the entire acquisition process from target identification to integration."
              btnURL="contact"
              image="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            />
            </div>
            <div
              className="col-lg-4 col-md-4 col-12 wow animate__fadeInUp"
              data-wow-duration="1.2s"
            >
            <SingleService
              cardNumberClass="number last"
              cardNumber="3"
              icon="fa fa-line-chart"
              title="Exit Strategies"
              description="Comprehensive planning and execution of business exits and divestitures to maximize value. We help business owners prepare for successful transitions through strategic planning and market positioning."
              btnURL="contact"
              image="https://images.unsplash.com/photo-1542959864-4b02e6607fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Service Area --> */}
    </>
  );
}
