import Link from "next/link";
import Image from "next/image";

export default function SingleService(props) {
  const {
    cardNumberClass,
    cardNumber,
    image,
    svgIcon,
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
            {/* If SVG icon is provided, use it; otherwise use Image */}
            {svgIcon ? (
              <div className="svg-icon-container" style={{ 
                width: '100px', 
                height: '100px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                backgroundColor: '#f5f8ff',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative'
              }}>
                {svgIcon}
              </div>
            ) : image ? (
              <Image
                src={image}
                alt={title || "Service image"}
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                  borderRadius: "50%"
                }}
              />
            ) : (
              <div style={{ 
                width: '100px', 
                height: '100px', 
                backgroundColor: '#f5f8ff',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <i className={icon ? icon : "fa fa-edit"} style={{ fontSize: '32px' }}></i>
              </div>
            )}
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
