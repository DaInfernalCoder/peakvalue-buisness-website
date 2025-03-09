import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-12">
              <div className="error-inner">
                <div className="error-top">
                  <h1>404!</h1>
                  <i className="fa fa-frown-o"></i>
                </div>
                <h2>Sorry! The Page Not Found </h2>
                <p>
                  Oops! The page you are looking for does not exit. it might
                  been moved or deleted.
                </p>
                <div className="eror-button">
                  <Link href="/" className="theme-btn">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
