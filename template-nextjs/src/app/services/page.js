import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import SingleService from "@/components/SingleService";
import Sliders from "../Home/Testimonial/Sliders";

import ServiceImg1 from "../../../public/images/service/service-img-1.jpg";
import ServiceImg2 from "../../../public/images/service/service-img-2.jpg";
import ServiceImg3 from "../../../public/images/service/service-img-3.jpg";

export default function Services() {
  return (
    <>
      <Breadcrumbs
        title="Services"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore."
        menuLink="services"
        menuText="Services"
      />

      {/* <!-- Service Area --> */}
      <section className="service-area archive">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Services"
                title="Our Services"
                description="All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-4 col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <SingleService
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
                image={ServiceImg3}
                icon="fa fa-lightbulb-o"
                title="Digital Marketing"
                description="There is now an abundance of readable dummy texts. These are
                  usually used when a text is required purely."
                btnURL="contact"
              />
            </div>
            <div
              className="col-lg-4 col-md-4 col-12 wow animate__fadeInUp"
              data-wow-duration="1.3s"
            >
              <SingleService
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
              data-wow-duration="1.4s"
            >
              <SingleService
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
              data-wow-duration="1.5s"
            >
              <SingleService
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

      {/* <!-- Testimonial-Area --> */}
      <section className="testimonial-area">
        <div className="testimonial-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Sliders />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Area --> */}
    </>
  );
}
