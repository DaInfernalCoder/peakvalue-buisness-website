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
                      <span>Phone:</span> +832-712-4162
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope"></i>
                      <span>Email: </span> info@peakvaluebusiness.com 
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker"></i>
                      <span>Location:</span> 1334 Brittmoore Rd Suite 1000B, Houston, TX 77043 {" "}
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
