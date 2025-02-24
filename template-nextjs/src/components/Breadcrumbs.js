import Link from "next/link";
import BreadcrumbBg from "../../public/images/breadcrumbs-bg.jpg";

export default function Breadcrumbs(props) {
  const { title, description, menuLink, menuText } = props;
  return (
    <>
      {/* <!-- Breadcrumbs --> */}
      <div
        className="breadcrumbs"
        style={{
          backgroundImage: `url(${BreadcrumbBg.src})`
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-12">
              <div className="breadcrumbs-content">
                <h2>{title ? title : "Services"}</h2>
                <p>
                  {description
                    ? description
                    : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore."}
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-12">
              <div className="breadcrumbs-menu">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                    <i className="fa fa-angle-double-right"></i>
                  </li>
                  <li className="active">
                    <Link href={`/${menuLink ? menuLink : "services"}`}>
                      {menuText ? menuText : "Services"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Breadcrumbs --> */}
    </>
  );
}
