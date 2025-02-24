export default function Topbar() {
  return (
    <>
      {/* <!-- Topbar --> */}
      <div className="topbar">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="topbar-address">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone"></i>
                      <span>Phone:</span> +0123456789
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope"></i>
                      <span>Email:</span> info@example.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker"></i>
                      <span>Location:</span> 28/A Street, The king city, USA{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Topbar --> */}
    </>
  );
}
