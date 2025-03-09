import Sliders from "./Slider";

export default function Client() {
  return (
    <>
      {/* <!-- Client-Area --> */}
      <div className="client-area py-12">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-8 text-center">
              <h2 className="text-4xl font-bold text-[#333] mb-4">Industry Affiliations</h2>
            </div>
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
