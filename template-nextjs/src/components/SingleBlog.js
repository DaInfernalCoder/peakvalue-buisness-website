import Image from "next/image";
import Link from "next/link";

// Default Unsplash image for blog posts (professional desk with laptop)
const DEFAULT_BLOG_IMG = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export default function SingleBlog(props) {
  const { image, date, title, excerpt, slug } = props;
  
  // Generate slug from title if not provided
  const postSlug = slug || title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || "blog-post";
  
  return (
    <div className="single-blog h-100">
      <div className="blog-img">
        <Link href={`/blog/${postSlug}`}>
          <Image
            src={image ? image : DEFAULT_BLOG_IMG}
            alt={title || "Business blog post"}
            width={600}
            height={400}
            priority={false}
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </Link>
        <span className="date">{date ? date : "Sep 25"}</span>
      </div>
      <div className="blog-body">
        <h3 className="mb-3">
          <Link href={`/blog/${postSlug}`} className="text-wrap">
            {title ? title : "The Best Dolor Sitamet Consectetur Adipiscing"}
          </Link>
        </h3>
        {excerpt && <p className="blog-excerpt text-muted mb-4">{excerpt}</p>}
        <div className="button">
          <Link href={`/blog/${postSlug}`} className="btn">Read More</Link>
        </div>
      </div>
    </div>
  );
}
