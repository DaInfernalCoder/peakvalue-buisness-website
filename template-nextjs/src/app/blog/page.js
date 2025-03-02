import HeaderBanner from "@/components/HeaderBanner";
import SingleBlog from "@/components/SingleBlog";
import CallToAction from "@/components/CallToAction";
import { blogPosts } from "../data/blogData";

export default function Blog() {
  return (
    <>
      <HeaderBanner 
        title="Business Advisory Blog"
        titleWidth="1000px"
        bannerType="blog"
        showOverlay={false}
      />

      {/* <!-- Blog Archive --> */}
      <section id="blogs" className="blog-area archive section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12 text-center">
              <div className="section-title">
                <h2>Latest Articles & Insights</h2>
                <p>Stay informed with expert advice and industry knowledge from our experienced business brokers.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6 col-12 mb-5">
                <SingleBlog
                  slug={post.slug}
                  image={post.image}
                  date={post.date}
                  title={post.title}
                  excerpt={post.excerpt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- End Blog Archive --> */}
      
      <CallToAction
        title="Need Personalized Business Advice?"
        description="Schedule a consultation with our business brokers to discuss your specific needs and goals."
        buttonText="Book a Consultation"
        buttonLink="/book-consultation"
      />
    </>
  );
}
