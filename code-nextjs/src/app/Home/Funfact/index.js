import Counter from "./Counter";

export default function Funfact() {
  return (
    <>
      {/* <!-- Fun Fact --> */}
      <div className="fun-fact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="count-box">
                <div className="row">
                  <Counter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Fun Fact --> */}
    </>
  );
}
