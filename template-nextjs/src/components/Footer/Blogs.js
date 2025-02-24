import Image from "next/image";
import Link from "next/link";
import Feed1 from "../../../public/images/feed-1.jpg";

export default function Blogs() {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        {/* <!-- Latest Post --> */}
        <div className="single-widget">
          <h3 className="widget-title">Latest News</h3>
          <div className="widget-post">
            <div className="post-img">
              <Link href="/blog">
                <Image src={Feed1} alt="#" width={70} height={70} />
              </Link>
            </div>
            <div className="post-content">
              <h4>
                <Link href="/blog">
                  Define World Best IT Solution Technology
                </Link>
              </h4>
              <span className="post-date">
                <i className="fa fa-clock-o"></i>24th March 2020
              </span>
            </div>
          </div>
          <div className="widget-post">
            <div className="post-img">
              <Link href="/blog">
                <Image src={Feed1} alt="#" width={70} height={70} />
              </Link>
            </div>
            <div className="post-content">
              <h4>
                <Link href="/blog">
                  Define World Best IT Solution Technology
                </Link>
              </h4>
              <span className="post-date">
                <i className="fa fa-clock-o"></i>24th March 2020
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
