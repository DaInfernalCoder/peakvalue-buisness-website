import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";

// Import a professional headshot image - you'll need to add this to your project
import SunnyImg from "../../../public/images/team/1.jpg"; // Using existing image as placeholder

export default function AboutUs() {
  return (
    <>
      <Breadcrumbs
        title="About Sunny Datta"
        description="Your trusted partner for business transactions, Business advisory, and growth strategy"
        menuLink="about-us"
        menuText="About Us"
      />

      {/* Hero Section with Professional Profile */}
      <section className="about-area section-padding" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-6 col-12 wow animate__fadeInLeft"
              data-wow-duration="1s"
            >
              <div className="about-img" style={{ 
                position: "relative", 
                overflow: "hidden", 
                maxWidth: "500px", 
                margin: "0 auto",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                borderRadius: "10px"
              }}>
                <Image 
                  src={SunnyImg} 
                  alt="Sunny Datta - Business Advisory Expert" 
                  width={500} 
                  height={500} 
                  style={{ 
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    transition: "transform 0.5s ease",
                  }} 
                  priority
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-12 wow animate__fadeInRight"
              data-wow-duration="1.1s"
            >
              <div className="about-content" style={{ padding: "20px" }}>
                <span style={{ 
                  color: "#00265F", 
                  fontWeight: "600", 
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  fontSize: "14px",
                  display: "inline-block",
                  marginBottom: "10px",
                  background: "rgba(0, 38, 95, 0.1)",
                  padding: "5px 15px",
                  borderRadius: "20px"
                }}>Business Advisory Expert</span>
                <h2 style={{ 
                  fontSize: "42px", 
                  fontWeight: "700", 
                  marginBottom: "15px",
                  color: "#333"
                }}>Sunny Datta</h2>
                <h4 className="mb-4" style={{ 
                  fontWeight: "500", 
                  color: "#555",
                  fontSize: "20px",
                  marginBottom: "20px"
                }}>Growth Strategist & Business Advisor</h4>
                <p style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#666",
                  marginBottom: "20px"
                }}>
                  A seasoned growth strategist with over 25 years of diverse experience in 
                  management consulting advisory and mergers & acquisitions. From Fortune 500 
                  companies to establishing his own successful businesses, Sunny brings 
                  comprehensive expertise to every client engagement.
                </p>
                <p style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#666",
                  marginBottom: "30px"
                }}>
                  With a background in Mechanical Engineering and an MBA, Sunny specializes in 
                  representing both sellers and buyers across multiple industries including 
                  Industrial, Distribution, Construction, B2B services, Healthcare, and 
                  Food & Beverage.
                </p>
                <div className="about-theme-btn" style={{ marginTop: "2rem" }}>
                  <Link href="/book-consultation" className="theme-btn" style={{
                    display: "inline-block",
                    padding: "14px 30px",
                    backgroundColor: "#00265F",
                    color: "white",
                    borderRadius: "5px",
                    fontSize: "16px",
                    textDecoration: "none",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(0, 38, 95, 0.2)"
                  }}>
                    Book a Discovery Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="service-area section-padding" style={{ 
        padding: "80px 0", 
        backgroundColor: "#f8f9fa"
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
          
          <div className="row" style={{ marginTop: "40px" }}>
            {/* Individualized Approach */}
            <div className="col-lg-4 col-md-4 col-12">
              <div className="service-card" style={{ 
                textAlign: "center", 
                marginBottom: "40px",
                padding: "30px 20px",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "100%"
              }}>
                <div style={{ 
                  width: "100px", 
                  height: "100px", 
                  borderRadius: "50%", 
                  background: "rgba(0, 38, 95, 0.9)", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  margin: "0 auto 25px",
                  boxShadow: "0 5px 15px rgba(0, 38, 95, 0.2)"
                }}>
                  <i className="fa fa-lightbulb-o" style={{ fontSize: "40px", color: "#fff" }}></i>
                </div>
                <h3 style={{ 
                  fontSize: "22px", 
                  fontWeight: "600", 
                  marginBottom: "15px",
                  color: "#333"
                }}>Individualized approach for your business</h3>
                <p style={{ 
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "#666",
                  marginTop: "15px"
                }}>
                  We consider every deal to be unique in terms of business characteristics, terms of sale and
                  industry. This nuanced approach is crucial to finding the right buyers and determining the
                  optimal deal structures.
                </p>
              </div>
            </div>
            
            {/* Tech and Business Savvy */}
            <div className="col-lg-4 col-md-4 col-12">
              <div className="service-card" style={{ 
                textAlign: "center", 
                marginBottom: "40px",
                padding: "30px 20px",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "100%"
              }}>
                <div style={{ 
                  width: "100px", 
                  height: "100px", 
                  borderRadius: "50%", 
                  background: "rgba(0, 38, 95, 0.9)", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  margin: "0 auto 25px",
                  boxShadow: "0 5px 15px rgba(0, 38, 95, 0.2)"
                }}>
                  <i className="fa fa-cogs" style={{ fontSize: "40px", color: "#fff" }}></i>
                </div>
                <h3 style={{ 
                  fontSize: "22px", 
                  fontWeight: "600", 
                  marginBottom: "15px",
                  color: "#333"
                }}>Tech and business savvy</h3>
                <p style={{ 
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "#666",
                  marginTop: "15px"
                }}>
                  You need an expert Business Advisor who can represent you in the best light possible to
                  sophisticated buyers. We have a wide range of industry expertise including:
                  semiconductors, electronics, instrumentation, manufacturing, Tech, SaaS
                  and High-end services businesses.
                </p>
              </div>
            </div>
            
            {/* Network of Experts */}
            <div className="col-lg-4 col-md-4 col-12">
              <div className="service-card" style={{ 
                textAlign: "center", 
                marginBottom: "40px",
                padding: "30px 20px",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "100%"
              }}>
                <div style={{ 
                  width: "100px", 
                  height: "100px", 
                  borderRadius: "50%", 
                  background: "rgba(0, 38, 95, 0.9)", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  margin: "0 auto 25px",
                  boxShadow: "0 5px 15px rgba(0, 38, 95, 0.2)"
                }}>
                  <i className="fa fa-users" style={{ fontSize: "40px", color: "#fff" }}></i>
                </div>
                <h3 style={{ 
                  fontSize: "22px", 
                  fontWeight: "600", 
                  marginBottom: "15px",
                  color: "#333"
                }}>Network of experts</h3>
                <p style={{ 
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "#666",
                  marginTop: "15px"
                }}>
                  Closing a deal involves a team including CPAs, Business attorneys, tax experts, insurance
                  agents, environmental consultants, domain experts, etc. We assess the resources you
                  have and bring in experts within our network as needed for the deal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />
    </>
  );
}
