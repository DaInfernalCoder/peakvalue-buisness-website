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
          backgroundImage: `url(${BreadcrumbBg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <div className="breadcrumb-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="breadcrumbs-content">
                <h1>{title ? title : "Services"}</h1>
                <p className="text-white">
                  {description
                    ? description
                    : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore."}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
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
