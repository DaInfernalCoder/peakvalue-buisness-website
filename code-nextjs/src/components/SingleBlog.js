import Image from "next/image";
import Link from "next/link";

// Default Unsplash image for blog posts (professional desk with laptop)
const DEFAULT_BLOG_IMG = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export default function SingleBlog(props) {
  const { image, date, title, excerpt, slug } = props;
  
  // Generate slug from title if not provided
  const postSlug = slug || title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || "blog-post";
  
  return (
    <div className="single-blog h-100 shadow rounded overflow-hidden">
      <div className="blog-img position-relative">
        <Link href={`/blog/${postSlug}`}>
          <Image
            src={image ? image : DEFAULT_BLOG_IMG}
            alt={title || "Business blog post"}
            width={600}
            height={400}
            priority={false}
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
        </Link>
      </div>
      <div className="blog-body p-4">
        <h3 className="mb-3" style={{ fontSize: '20px', lineHeight: '1.4' }}>
          <Link href={`/blog/${postSlug}`} className="text-wrap text-decoration-none text-white">
            {title ? title : "The Best Dolor Sitamet Consectetur Adipiscing"}
          </Link>
        </h3>
        {excerpt && <p className="blog-excerpt text-white mb-4" style={{ fontSize: '15px', lineHeight: '1.6' }}>{excerpt}</p>}
        <div className="button">
          <Link href={`/blog/${postSlug}`} className="btn btn-primary rounded-pill px-4">Read More</Link>
        </div>
      </div>
    </div>
  );
}
