import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";
import HeaderBanner from "@/components/HeaderBanner";
import VideoTestimonial from "@/components/VideoTestimonial";

// Import professional headshot images
import SunnyImg from "../../../public/images/team/1.jpg";
import AmitaImg from "../../../public/images/team/2.jpg";

export default function AboutUs() {
  // Modern, aesthetically pleasing styles
  const profileCardStyle = {
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
    height: "100%",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    backgroundColor: "white",
    color: "#333",
    width: "100%",
    maxWidth: "100%",
    border: "1px solid #f0f0f0",
  };

  const imageContainerStyle = {
    position: "relative",
    overflow: "hidden",
    maxWidth: "500px",
    margin: "0 auto",
    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
    borderRadius: "16px",
    transition: "transform 0.5s ease",
  };

  const imageStyle = {
    objectFit: "cover",
    width: "100%",
    height: "auto",
    borderRadius: "16px",
    transition: "transform 0.5s ease",
  };

  const badgeStyle = {
    color: "#00265F",
    fontWeight: "600",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "13px",
    display: "inline-block",
    marginBottom: "15px",
    background: "#f0f7ff",
    padding: "8px 18px",
    borderRadius: "30px",
  };

  const nameStyle = {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#00265F",
    lineHeight: "1.2",
  };

  const titleStyle = {
    fontWeight: "500",
    color: "#555",
    fontSize: "20px",
    marginBottom: "25px",
    borderBottom: "2px solid #f0f7ff",
    paddingBottom: "15px",
    display: "inline-block",
  };

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#555",
    marginBottom: "20px",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "15px 35px",
    backgroundColor: "#00265F",
    color: "white",
    borderRadius: "8px",
    fontSize: "16px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 20px rgba(0, 38, 95, 0.2)",
  };

  const sectionWrapperStyle = {
    width: "100%",
    overflow: "hidden",
    padding: "70px 0",
    backgroundColor: "#fafafa",
  };

  const whiteBackgroundStyle = {
    backgroundColor: "white",
    padding: "70px 0",
    overflow: "hidden",
  };

  const featureCardStyle = {
    textAlign: "center", 
    marginBottom: "40px",
    padding: "40px 30px",
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    height: "100%",
    border: "1px solid #f0f0f0",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
    }
  };

  const iconContainerStyle = {
    width: "90px", 
    height: "90px", 
    borderRadius: "50%", 
    background: "linear-gradient(135deg, #00265F, #0047AB)", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    margin: "0 auto 30px",
    boxShadow: "0 10px 25px rgba(0, 38, 95, 0.2)"
  };

  const featureTitleStyle = {
    fontSize: "22px", 
    fontWeight: "600", 
    marginBottom: "20px",
    color: "#333"
  };

  const featureTextStyle = {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#666",
    marginTop: "15px"
  };

  const dividerStyle = {
    height: "1px", 
    background: "linear-gradient(to right, transparent, #e0e0e0, transparent)", 
    margin: "0 auto",
    width: "80%"
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <HeaderBanner 
        title="About Us"
        titleWidth="1000px"
        bannerType="about"
        showOverlay={false}
      />

      {/* Team Introduction */}
      <section style={whiteBackgroundStyle}>
        <div className="container">
          <SectionTitle 
            smTitle="Our Team"
            title="Expert Business Advisors"
            description="Our team brings decades of combined experience in business advisory, mergers & acquisitions, and strategic growth planning."
          />
          
          <div style={{ 
            maxWidth: "800px", 
            margin: "40px auto 0", 
            textAlign: "center", 
            color: "#555",
            fontSize: "18px",
            lineHeight: "1.8"
          }}>
            <p>
              At our core, we believe in building lasting relationships with our clients through 
              trust, expertise, and a commitment to delivering exceptional results. Our advisors 
              work closely with you to understand your unique business needs and develop 
              tailored strategies for success.
            </p>
          </div>
        </div>
      </section>

      {/* Sunny's Profile Section */}
      <section style={sectionWrapperStyle}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 col-12">
              <div style={imageContainerStyle} className="hover-zoom">
                <Image 
                  src={SunnyImg} 
                  alt="Sunny Datta - Business Advisory Expert" 
                  width={500} 
                  height={500} 
                  style={imageStyle} 
                  priority
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-12">
              <div style={profileCardStyle}>
                <div style={{ marginBottom: "20px" }}>
                  <span style={badgeStyle}>Business Advisory Expert</span>
                </div>
                <h2 style={nameStyle}>Sunny Datta</h2>
                <h4 style={titleStyle}>Growth Strategist & Business Advisor</h4>
                <p style={paragraphStyle}>
                  A seasoned growth strategist with over 25 years of diverse experience in 
                  management consulting advisory and mergers & acquisitions. From Fortune 500 
                  companies to establishing his own successful businesses and having successful exits, Sunny brings 
                  comprehensive expertise to every client engagement.
                </p>
                <p style={paragraphStyle}>
                  With a background in Mechanical Engineering and an MBA, Sunny specializes in 
                  representing both sellers and buyers across multiple industries including 
                  Industrial, Distribution, Construction, B2B services, Healthcare, and 
                  Food & Beverage.
                </p>
                <div style={{ 
                  display: "flex", 
                  gap: "15px", 
                  marginTop: "2.5rem",
                  alignItems: "center" 
                }}>
                  <Link href="/book-consultation" className="theme-btn" style={buttonStyle}>
                    Book a Discovery Call
                  </Link>
                  <Link href="/services" style={{ 
                    color: "#00265F", 
                    fontWeight: "600", 
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <span>View Services</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div style={dividerStyle}></div>
      </div>

      {/* Amita's Profile Section */}
      <section style={whiteBackgroundStyle}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 col-12 order-lg-1 order-md-1 order-2">
              <div style={profileCardStyle}>
                <div style={{ marginBottom: "20px" }}>
                  <span style={badgeStyle}>Business Advisory Expert</span>
                </div>
                <h2 style={nameStyle}>Amita Datta</h2>
                <h4 style={titleStyle}>Business Advisor & Transaction Specialist</h4>
                <p style={paragraphStyle}>
                  A versatile business professional with 18+ years of experience in corporate environments 
                  and entrepreneurship. Amita has successfully established, operated, and sold multiple 
                  businesses, bringing practical expertise to business transaction advisory.
                </p>
                <p style={paragraphStyle}>
                  With a PhD, MS, and BS in Pharmacy and a Texas Real Estate License, Amita specializes in 
                  business valuation, exit strategies, and M&A advisory with particular strength in 
                  healthcare-related businesses and real estate considerations.
                </p>
                <div style={{ 
                  display: "flex", 
                  gap: "15px", 
                  marginTop: "2.5rem",
                  alignItems: "center" 
                }}>
                  <Link href="/book-consultation" className="theme-btn" style={buttonStyle}>
                    Book a Discovery Call
                  </Link>
                  <Link href="/services" style={{ 
                    color: "#00265F", 
                    fontWeight: "600", 
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <span>View Services</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-12 order-lg-2 order-md-2 order-1">
              <div style={imageContainerStyle} className="hover-zoom">
                <Image 
                  src={AmitaImg} 
                  alt="Amita Datta - Business Advisor & Transaction Specialist" 
                  width={500} 
                  height={500} 
                  style={imageStyle} 
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ 
        padding: "90px 0 70px", 
        backgroundColor: "#f7f9fc",
        overflow: "hidden"
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle 
                smTitle="Our Approach"
                title="Why Choose Us"
                description="We deliver exceptional value through our personalized approach, technical expertise, and comprehensive network"
              />
            </div>
          </div>
          
          <div className="row" style={{ marginTop: "50px" }}>
            {/* Individualized Approach */}
            <div className="col-lg-4 col-md-4 col-12">
              <div style={featureCardStyle} className="feature-card">
                <div style={iconContainerStyle}>
                  <i className="fa fa-lightbulb-o" style={{ fontSize: "36px", color: "#fff" }}></i>
                </div>
                <h3 style={featureTitleStyle}>Individualized Approach</h3>
                <p style={featureTextStyle}>
                  We consider every deal to be unique in terms of business characteristics, terms of sale and
                  industry. This nuanced approach is crucial to finding the right buyers and determining the
                  optimal deal structures.
                </p>
              </div>
            </div>
            
            {/* Tech and Business Savvy */}
            <div className="col-lg-4 col-md-4 col-12">
              <div style={featureCardStyle} className="feature-card">
                <div style={iconContainerStyle}>
                  <i className="fa fa-cogs" style={{ fontSize: "36px", color: "#fff" }}></i>
                </div>
                <h3 style={featureTitleStyle}>Tech and Business Savvy</h3>
                <p style={featureTextStyle}>
                  You need an expert Business Advisor who can represent you in the best light possible to
                  sophisticated buyers. We have a wide range of industry expertise including:
                  semiconductors, electronics, instrumentation, manufacturing, Tech, SaaS
                  and High-end services businesses.
                </p>
              </div>
            </div>
            
            {/* Network of Experts */}
            <div className="col-lg-4 col-md-4 col-12">
              <div style={featureCardStyle} className="feature-card">
                <div style={iconContainerStyle}>
                  <i className="fa fa-users" style={{ fontSize: "36px", color: "#fff" }}></i>
                </div>
                <h3 style={featureTitleStyle}>Network of Experts</h3>
                <p style={featureTextStyle}>
                  Closing a deal involves a team including CPAs, Business attorneys, tax experts, insurance
                  agents, environmental consultants, domain experts, etc. We assess the resources you
                  have and bring in experts within our network as needed for the deal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section style={whiteBackgroundStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle 
                smTitle="Client Success"
                title="What Our Clients Say"
                description="Hear from business owners who have successfully worked with our advisory team"
              />
            </div>
          </div>
          
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col-lg-10 offset-lg-1">
              <div style={{
                padding: "40px",
                borderRadius: "16px",
                backgroundColor: "#f7f9fc",
                position: "relative",
                marginBottom: "30px"
              }}>
                <div style={{
                  fontSize: "80px",
                  color: "#00265F",
                  opacity: "0.1",
                  position: "absolute",
                  top: "20px",
                  left: "30px",
                  fontFamily: "Georgia, serif"
                }}>
                  &quot;
                </div>
                <p style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                  color: "#555",
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: "1",
                  paddingLeft: "20px",
                  paddingTop: "10px"
                }}>
                  Working with Sunny and Amita was transformative for our business exit strategy. Their deep industry knowledge and personalized approach helped us navigate a complex sale process with confidence. We achieved a valuation that exceeded our expectations and found the perfect buyer who aligned with our company values.
                </p>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px"
                }}>
                  <div style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#00265F",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px"
                  }}>
                    JD
                  </div>
                  <div>
                    <h4 style={{
                      margin: "0",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#333"
                    }}>
                      Surangi Udugama
                    </h4>
                    <p style={{
                      margin: "0",
                      fontSize: "14px",
                      color: "#666"
                    }}>
                      CEO, Hanna and Peige LLC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
