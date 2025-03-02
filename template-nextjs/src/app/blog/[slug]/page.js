import { getBlogPost } from "@/app/data/blogData";
import HeaderBanner from "@/components/HeaderBanner";
import CallToAction from "@/components/CallToAction";
import Link from "next/link";
import Image from "next/image";

// Remove the default author image as we'll use the custom ones from our data
// const AUTHOR_IMG = "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export default function BlogPost({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="section">
        <div className="container text-center py-5">
          <h2>Blog Post Not Found</h2>
          <p>The blog post you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link href="/blog" className="btn">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeaderBanner 
        title={post.title}
        titleWidth="1000px"
        bannerType="blog"
        showOverlay={false}
      />

      {/* <!-- Blog Single --> */}
      <section className="blog-single section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-12">
              <div className="single-inner">
                <div className="post-thumbnails">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={1200} 
                    height={600} 
                    className="img-fluid"
                    priority={true}
                  />
                </div>
                <div className="post-details">
                  <div className="post-meta">
                    <span className="date"><i className="fa fa-calendar"></i> {post.date}</span>
                    <span className="author"><i className="fa fa-user"></i> {post.author}</span>
                  </div>
                  <h2 className="post-title">{post.title}</h2>
                  <div className="post-content">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                </div>
                
                <div className="post-author">
                  <div className="post-author-inner">
                    <div className="author-image">
                      <Image 
                        src={post.authorImage}
                        alt={post.author} 
                        width={100} 
                        height={100}
                        style={{ objectFit: 'cover', borderRadius: '50%' }}
                      />
                    </div>
                    <div className="author-content">
                      <h4>{post.author}</h4>
                      <span className="designation">{post.authorTitle}</span>
                      <p>Business brokerage professional with extensive experience helping clients buy and sell businesses successfully.</p>
                    </div>
                  </div>
                </div>
                
                <div className="post-nav">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="prev-post text-center text-md-start p-4">
                        <Link href="/blog" className="d-block">
                          <h4>Back to Blog</h4>
                          <span className="text-primary">View all articles</span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="next-post text-center text-md-end p-4">
                        <Link href="/book-consultation" className="d-block">
                          <h4>Ready to Talk?</h4>
                          <span className="text-primary">Book a consultation</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Blog Single --> */}
      
      <CallToAction 
        title="Need Expert Business Advice?"
        description="Our business brokers are ready to help you with your specific business needs. Schedule a consultation today."
        buttonText="Book a Consultation"
        buttonLink="/book-consultation"
      />
    </>
  );
}
