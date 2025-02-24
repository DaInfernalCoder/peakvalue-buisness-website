import Image from "next/image";
import Link from "next/link";

import BlogImg from "../../public/images/blog/blog-1.jpg";
import AdminImg from "../../public/images/blog/admin/admin-1.jpg";

export default function SingleBlog(props) {
  const { image, date, title, adminImg, adminTitle, comments, reviews } = props;
  return (
    <>
      <div className="single-blog">
        <div className="blog-img">
          <Image
            src={image ? image : BlogImg}
            alt="#"
            width={350}
            height={420}
          />
          <span className="date">{date ? date : "Sep 25"}</span>
        </div>
        <div className="blog-body">
          <h3>
            <Link href="/blog-single">
              {title ? title : "The Best Dolor Sitamet Consectetur Adipiscing"}
            </Link>
          </h3>
          <div className="blog-meta">
            <div className="single-meta">
              <Image
                src={adminImg ? adminImg : AdminImg}
                alt="#"
                width={30}
                height={30}
              />
              <p>{adminTitle ? adminTitle : "Michael"}</p>
            </div>
            <div className="single-meta">
              <p>
                <i className="fa fa-comments"></i>{" "}
                <span>{comments ? comments : "15 comments"}</span>
              </p>
            </div>
            <div className="single-meta">
              <p>
                <i className="fa fa-star"></i>{" "}
                <span>{reviews ? reviews : "20"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
