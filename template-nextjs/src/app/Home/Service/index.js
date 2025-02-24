import SectionTitle from "@/components/SectionTitle";
import SingleService from "@/components/SingleService";

import ServiceImg1 from "../../../../public/images/service/service-img-1.jpg";
import ServiceImg2 from "../../../../public/images/service/service-img-2.jpg";
import ServiceImg3 from "../../../../public/images/service/service-img-3.jpg";

export default function Service() {
  return (
    <>
      {/* <!-- Service Area --> */}
      <section className="service-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle />
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-4 col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <SingleService
                cardNumberClass="number"
                cardNumber="1"
                image={ServiceImg1}
                icon="fa fa-edit"
                title="Business Consulting"
                description="  There is now an abundance of readable dummy texts. These are
                    usually used when a text is required purely."
                btnURL="contact"
              />
            </div>
            <div
              className="col-lg-4 col-md-4 col-12 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <SingleService
                cardNumberClass="number"
                cardNumber="2"
                image={ServiceImg2}
                icon="fa fa-eye"
                title="Graphics Design"
                description="There is now an abundance of readable dummy texts. These are
                usually used when a text is required purely."
                btnURL="contact"
              />
            </div>
            <div
              className="col-lg-4 col-md-4 col-12 wow animate__fadeInUp"
              data-wow-duration="1.2s"
            >
              <SingleService
                cardNumberClass="number last"
                cardNumber="3"
                image={ServiceImg3}
                icon="fa fa-lightbulb-o"
                title="Digital Marketing"
                description="There is now an abundance of readable dummy texts. These are
                usually used when a text is required purely."
                btnURL="contact"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Service Area --> */}
    </>
  );
}
