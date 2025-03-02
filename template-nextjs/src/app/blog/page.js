import Breadcrumbs from "@/components/Breadcrumbs";
import SingleBlog from "@/components/SingleBlog";

import BlogImg1 from "../../../public/images/blog/blog-1.jpg";
import BlogImg2 from "../../../public/images/blog/blog-2.jpg";
import BlogImg3 from "../../../public/images/blog/blog-3.jpg";
import BlogImg4 from "../../../public/images/blog/blog-4.jpg";

export default function blog() {
  return (
    <>
      <Breadcrumbs
        title="Business Advisory Blog"
        description="Expert insights and strategies for buying, selling, and maximizing the value of your business."
        menuLink="blog"
        menuText="Blog"
      />

      {/* <!-- Blog Archive --> */}
      <section id="blogs" className="blog-area archive">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 mb-5">
              <SingleBlog
                image={BlogImg1}
                date="Mar 10"
                title="Understanding Business Valuation: Key Factors That Determine Your Business's Worth"
                excerpt="Learn about the critical elements that influence your business valuation, from financial performance to market conditions, and how to improve your company's value."
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12 mb-5">
              <SingleBlog
                image={BlogImg2}
                date="Mar 5"
                title="Preparing Your Business for Sale: A Strategic Guide"
                excerpt="Discover the essential steps to prepare your business for a successful sale, maximize its value, and attract qualified buyers in today's competitive market."
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12 mb-5">
              <SingleBlog
                image={BlogImg3}
                date="Feb 28"
                title="Due Diligence in Business Acquisition: What Buyers Need to Know"
                excerpt="A comprehensive guide to conducting proper due diligence when acquiring a business, including financial, legal, operational, and market considerations."
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12 mb-5">
              <SingleBlog
                image={BlogImg4}
                date="Feb 20"
                title="Maximizing Business Value: Pre-Sale Improvements"
                excerpt="Practical strategies for enhancing your business's value before selling, focusing on financial performance, operational efficiency, and sustainable growth."
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Blog Archive --> */}
    </>
  );
}
