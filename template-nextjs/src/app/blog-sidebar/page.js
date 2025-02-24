import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SingleBlog from "@/components/SingleBlog";

import BlogImg1 from "../../../public/images/blog/blog-1.jpg";
import BlogImg2 from "../../../public/images/blog/blog-2.jpg";
import BlogImg3 from "../../../public/images/blog/blog-3.jpg";
import BlogImg4 from "../../../public/images/blog/blog-4.jpg";
import AdminImg1 from "../../../public/images/blog/admin/admin-1.jpg";
import AdminImg2 from "../../../public/images/blog/admin/admin-2.jpg";
import AdminImg3 from "../../../public/images/blog/admin/admin-3.jpg";
import BlogSidebar from "@/components/BlogSidebar";

export default function BlogWithSidebar() {
  return (
    <>
      <Breadcrumbs
        title="Blog Area"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        menuLink="blog-sidebar"
        menuText="Blog Grid"
      />

      {/* <!-- Blog Archive --> */}
      <section id="blogs" className="blog-area archive">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <SingleBlog
                    image={BlogImg1}
                    date="Sep 25"
                    title="The Best Dolor Sitamet Consectetur Adipiscing"
                    adminImg={AdminImg1}
                    adminTitle="Michael"
                    comments="15 comments"
                    reviews="20"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <SingleBlog
                    image={BlogImg2}
                    date="Sep 25"
                    title="Business is Pulvinar Metuseu Venenatis pellen Praesent"
                    adminImg={AdminImg2}
                    adminTitle="Michael"
                    comments="30 comments"
                    reviews="34"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <SingleBlog
                    image={BlogImg3}
                    date="Aug 25"
                    title="Behind the Word Muntains, Far From the Countries"
                    adminImg={AdminImg3}
                    adminTitle="Michael"
                    comments="39 comments"
                    reviews="50"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <SingleBlog
                    image={BlogImg4}
                    date="Jul 10"
                    title="Consulting Needs the Big Oxmox advised Bestania"
                    adminImg={AdminImg1}
                    adminTitle="Michael"
                    comments="49 comments"
                    reviews="58"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <SingleBlog
                    image={BlogImg1}
                    date="Sep 25"
                    title="The Best Dolor Sitamet Consectetur Adipiscing"
                    adminImg={AdminImg1}
                    adminTitle="Michael"
                    comments="15 comments"
                    reviews="20"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <SingleBlog
                    image={BlogImg2}
                    date="Sep 25"
                    title="Business is Pulvinar Metuseu Venenatis pellen Praesent"
                    adminImg={AdminImg2}
                    adminTitle="Michael"
                    comments="30 comments"
                    reviews="34"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <SingleBlog
                    image={BlogImg3}
                    date="Aug 25"
                    title="Behind the Word Muntains, Far From the Countries"
                    adminImg={AdminImg3}
                    adminTitle="Michael"
                    comments="39 comments"
                    reviews="50"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <SingleBlog
                    image={BlogImg4}
                    date="Jul 10"
                    title="Consulting Needs the Big Oxmox advised Bestania"
                    adminImg={AdminImg1}
                    adminTitle="Michael"
                    comments="49 comments"
                    reviews="58"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <SingleBlog
                    image={BlogImg1}
                    date="Sep 25"
                    title="The Best Dolor Sitamet Consectetur Adipiscing"
                    adminImg={AdminImg1}
                    adminTitle="Michael"
                    comments="15 comments"
                    reviews="20"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <SingleBlog
                    image={BlogImg2}
                    date="Sep 25"
                    title="Business is Pulvinar Metuseu Venenatis pellen Praesent"
                    adminImg={AdminImg2}
                    adminTitle="Michael"
                    comments="30 comments"
                    reviews="34"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {/* <!-- Start Pagination --> */}
                  <div className="bonik-pagination-main">
                    <ul className="bonik-pagination">
                      <li className="prev">
                        <Link href="#">
                          <i className="fa fa-long-arrow-left"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">1</Link>
                      </li>
                      <li className="active">
                        <Link href="#">2</Link>
                      </li>
                      <li>
                        <Link href="#">3</Link>
                      </li>
                      <li>
                        <Link href="#">4</Link>
                      </li>
                      <li className="next">
                        <Link href="#">
                          <i className="fa fa-long-arrow-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Blog Archive --> */}
    </>
  );
}
