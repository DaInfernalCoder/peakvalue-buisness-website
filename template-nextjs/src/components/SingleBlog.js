import Image from "next/image";
import Link from "next/link";

import BlogImg from "../../public/images/blog/blog-1.jpg";

export default function SingleBlog(props) {
  const { image, date, title, excerpt } = props;
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
            <Link href="#">
              {title ? title : "The Best Dolor Sitamet Consectetur Adipiscing"}
            </Link>
          </h3>
          {excerpt && <p className="blog-excerpt">{excerpt}</p>}
        </div>
      </div>
    </>
  );
}
