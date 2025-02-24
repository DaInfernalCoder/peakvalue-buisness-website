import Image from "next/image";
import Link from "next/link";

import AboutImg from "../../../../public/images/about-img.png";

export default function About() {
  return (
    <>
      {/* <!-- About Area --> */}
      <section className="about-area">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 col-12 wow animate__fadeInLeft"
              data-wow-duration="1s"
            >
              {/* <!-- About image --> */}
              <div className="about-img">
                <Image src={AboutImg} alt="#" width={470} height={574} />
                <div className="activity">
                  <span>35+</span> Years
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-12 wow animate__fadeInRight"
              data-wow-duration="1.1s"
            >
              {/* <!-- About content --> */}
              <div className="about-content">
                <span>About company</span>
                <h2>
                  More Than <b>35+</b> Years, We Provide Business Solutions.
                </h2>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denounc ing pleasure and praising pain was born and I will
                  give yomplete acount of the system Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra
                </p>
                <div className="feature">
                  {/* <!-- Single Feature --> */}
                  <div className="single-feature">
                    <i className="fa fa-briefcase"></i>
                    <div className="feature-content">
                      <h3>Smart Business Solutions!</h3>
                      <p>
                        Sedut perspiciatis unde omnis iste natus error sitlupt
                        tem accusantium doloremque laudantium
                      </p>
                    </div>
                  </div>
                  {/* <!-- Single Feature --> */}
                  <div className="single-feature">
                    <i className="fa fa-code"></i>
                    <div className="feature-content">
                      <h3>Quality Coding & Best Service</h3>
                      <p>
                        Sedut perspiciatis unde omnis iste natus error sitlupt
                        tem accusantium doloremque laudantium
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-theme-btn">
                  <Link href="/about-us" className="theme-btn">
                    More about us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Area -->	 */}
    </>
  );
}
