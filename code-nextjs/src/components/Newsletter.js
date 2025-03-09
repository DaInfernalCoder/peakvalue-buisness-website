import NewseletterBg from "../../public/images/subscribe-bg.jpg";

export default function Newsletter() {
  return (
    <>
      {/* <!-- Subscribe Area --> */}
      <section
        className="subscribe-area"
        style={{
          backgroundImage: `url(${NewseletterBg.src})`
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 col-12 wow animate__fadeInLeft"
              data-wow-duration="1s"
            >
              <div className="subscribe-content">
                <h2>Subscribe & stay updated</h2>
                <p>Posuere nam natoque nec rhoncus malesuad phasel ante.</p>
              </div>
              <form className="form-main">
                <div className="form-group">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Your email adress"
                    required="required"
                  />
                  <button type="submit" className="theme-btn">
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Subscribe Area -->    */}
    </>
  );
}
