import Image from "next/image";
import Link from "next/link";

import FeedImg1 from "../../public/images/feed-1.jpg";
import FeedImg2 from "../../public/images/feed-2.jpg";
import FeedImg3 from "../../public/images/feed-3.jpg";
import BannerImg from "../../public/images/sidebar-banner.png";

export default function BlogSidebar() {
  return (
    <>
      {/* <!-- Blog Sidebar --> */}
      <div className="blog-sidebar">
        <div className="widget widget-search">
          <h4 className="widget-title">Search Objects</h4>
          <form action="#">
            <input
              type="search"
              placeholder="Search your keyword..."
              required
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        {/* <!-- Popular Post Widget --> */}
        <div className="widget popular-feeds">
          <h4 className="widget-title">Popular Articles</h4>
          <div className="popular-feed-loop">
            {/* <!-- Single Popular --> */}
            <div className="single-popular-feed">
              <div className="feed-img">
                <Image src={FeedImg1} alt="#" width={80} height={80} />
              </div>
              <div className="feed-desc">
                <h6>
                  <Link href="#">
                    The Best Dolor Sitamet Content Adipiscing
                  </Link>
                </h6>
                <span className="time">
                  <i className="fa fa-calendar"></i> 28 January 2020
                </span>
              </div>
            </div>
            {/* <!-- Single Popular --> */}
            <div className="single-popular-feed">
              <div className="feed-img">
                <Image src={FeedImg2} alt="#" width={80} height={80} />
              </div>
              <div className="feed-desc">
                <h6>
                  <Link href="#">
                    Business is Pulvinar Metuseu Venenatis pellen Praesent .
                  </Link>
                </h6>
                <span className="time">
                  <i className="fa fa-calendar"></i> 25 April 2020
                </span>
              </div>
            </div>

            {/* <!-- Single Popular --> */}
            <div className="single-popular-feed">
              <div className="feed-img">
                <Image src={FeedImg3} alt="#" width={80} height={80} />
              </div>
              <div className="feed-desc">
                <h6>
                  <Link href="#">
                    Consulting Needs the Big Oxmox advised Bestania.
                  </Link>
                </h6>
                <span className="time">
                  <i className="fa fa-calendar"></i> 24 March 2020
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Categories Widget --> */}
        <div className="widget categories-widget">
          <h4 className="widget-title">Categories</h4>
          <ul>
            <li>
              <Link href="#">
                Business<span>26</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Consultant<span>26</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Creative<span>26</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                UI/UX<span>26</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Technology<span>26</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- Social Icon Widget --> */}
        <div className="widget socail-widget">
          <h4 className="widget-title">Never Miss News</h4>
          <ul>
            <li>
              <Link href="#">
                <i className="fa fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fa fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fa fa-dribbble"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fa fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- Popular Tags Widget --> */}
        <div className="widget popular-tag-widget">
          <h4 className="widget-title">Popular Tags</h4>
          <ul>
            <li>
              <Link href="#">Popular</Link>
            </li>
            <li>
              <Link href="#">design</Link>
            </li>
            <li>
              <Link href="#">ux</Link>
            </li>
            <li>
              <Link href="#">usability</Link>
            </li>
            <li>
              <Link href="#">develop</Link>
            </li>
            <li>
              <Link href="#">icon</Link>
            </li>
            <li>
              <Link href="#">business</Link>
            </li>
            <li>
              <Link href="#">consult</Link>
            </li>
            <li>
              <Link href="#">kit</Link>
            </li>
            <li>
              <Link href="#">keyboard</Link>
            </li>
            <li>
              <Link href="#">mouse</Link>
            </li>
            <li>
              <Link href="#">tech</Link>
            </li>
          </ul>
        </div>
        {/* <!-- Banner Ad Widget --> */}
        <div className="widget banner-ad-widget">
          <Image src={BannerImg} alt="#" width={290} height={398} />
        </div>
      </div>
    </>
  );
}
