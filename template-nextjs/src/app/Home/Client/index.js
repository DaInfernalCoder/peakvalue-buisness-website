import Sliders from "./Slider";

export default function Client() {
  return (
    <>
      {/* <!-- Client-Area --> */}
      <div className="client-area">
        <div className="container">
          <div className="row">
            <div
              className="col-12"
              style={{ position: "relative", padding: "0" }}
            >
              <Sliders />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Client Area --> */}
    </>
  );
}
