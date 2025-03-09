import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export default function portfolio() {
  return (
    <>
      <Breadcrumbs
        title="Mail Success"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        menuLink="mail-success"
        menuText="Mail Success"
      />

      {/* Mail Success Area */}
      <section className="success page">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="mail">
                <h2>
                  Email Send <span>Successfully!</span>
                </h2>
                <p>
                  We have received your email, One of our help support member
                  will response within 24 hours. Please wait. Thank you :)
                </p>
                <Link href="/" className="theme-btn">
                  <i className="fa fa-long-arrow-left"></i>Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
