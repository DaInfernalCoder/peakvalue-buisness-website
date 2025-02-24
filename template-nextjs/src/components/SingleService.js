import Link from "next/link";
import Image from "next/image";

import ServiceImg1 from "../../public/images/service/service-img-1.jpg";

export default function SingleService(props) {
  const {
    cardNumberClass,
    cardNumber,
    image,
    icon,
    title,
    description,
    btnURL,
  } = props;

  return (
    <>
      <div className="single-service">
        <div className={cardNumberClass ? cardNumberClass : ""}>
          <h6>{cardNumber ? cardNumber : ""}</h6>
        </div>
        <div className="service-head">
          <div className="service-img">
            <Image
              src={image ? image : ServiceImg1}
              alt="#"
              width={100}
              height={100}
            />
            <i className={icon ? icon : "fa fa-edit"}></i>
          </div>
        </div>
        <div className="service-content">
          <h4>{title ? title : "Business Consulting"}</h4>
          <p>
            {description
              ? description
              : "There is now an abundance of readable dummy texts. These are usually used when a text is required purely."}
          </p>
        </div>
        <div className="service-bottom">
          <Link href={`/${btnURL ? btnURL : "contact"}`}>
            <i className="fa fa-chevron-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
