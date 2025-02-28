import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

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
      <section className="about-area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-6 col-12 wow animate__fadeInLeft"
              data-wow-duration="1s"
            >
              <div className="about-img" style={{ position: "relative", overflow: "hidden", maxWidth: "500px", margin: "0 auto" }}>
                <Image 
                  src={SunnyImg} 
                  alt="Sunny Datta - Business Advisory Expert" 
                  width={500} 
                  height={500} 
                  style={{ 
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px"
                  }} 
                  priority
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-12 wow animate__fadeInRight"
              data-wow-duration="1.1s"
            >
              <div className="about-content">
                <span>Business Advisory Expert</span>
                <h2>Sunny Datta</h2>
                <h4 className="mb-4" style={{ fontWeight: "400", color: "white" }}>Growth Strategist & Business Advisor</h4>
                <p>
                  A seasoned growth strategist with over 25 years of diverse experience in 
                  management consulting advisory and mergers & acquisitions. From Fortune 500 
                  companies to establishing his own successful businesses, Sunny brings 
                  comprehensive expertise to every client engagement.
                </p>
                <p>
                  With a background in Mechanical Engineering and an MBA, Sunny specializes in 
                  representing both sellers and buyers across multiple industries including 
                  Industrial, Distribution, Construction, B2B services, Healthcare, and 
                  Food & Beverage.
                </p>
                <div className="about-theme-btn mt-10" style={{ marginTop: "2rem" }}>
                  <Link href="/book-consultation" className="theme-btn">
                    Book a Discovery Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="service-area section-padding gray-bg">
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
          
          <div className="row">
            {/* Individualized Approach */}
            <div className="col-lg-4 col-md-4 col-12">
              <div className="text-center mb-4">
                <div style={{ 
                  width: "150px", 
                  height: "150px", 
                  borderRadius: "50%", 
                  background: "#000", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  margin: "0 auto 20px"
                }}>
                  <i className="fa fa-lightbulb-o" style={{ fontSize: "50px", color: "#fff" }}></i>
                </div>
                <h3>Individualized approach for your business</h3>
                <p className="mt-3">
                  We consider every deal to be unique in terms of business characteristics, terms of sale and
                  industry. This nuanced approach is crucial to finding the right buyers and determining the
                  optimal deal structures.
                </p>
              </div>
            </div>
            
            {/* Tech and Business Savvy */}
            <div className="col-lg-4 col-md-4 col-12">
              <div className="text-center mb-4">
                <div style={{ 
                  width: "150px", 
                  height: "150px", 
                  borderRadius: "50%", 
                  background: "#000", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  margin: "0 auto 20px"
                }}>
                  <i className="fa fa-cogs" style={{ fontSize: "50px", color: "#fff" }}></i>
                </div>
                <h3>Tech and business savvy</h3>
                <p className="mt-3">
                  You need an expert Business Advisor who can represent you in the best light possible to
                  sophisticated buyers. We have a wide range of industry expertise including:
                  semiconductors, electronics, instrumentation, manufacturing, Tech, SaaS
                  and High-end services businesses.
                </p>
              </div>
            </div>
            
            {/* Network of Experts */}
            <div className="col-lg-4 col-md-4 col-12">
              <div className="text-center mb-4">
                <div style={{ 
                  width: "150px", 
                  height: "150px", 
                  borderRadius: "50%", 
                  background: "#000", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  margin: "0 auto 20px"
                }}>
                  <i className="fa fa-users" style={{ fontSize: "50px", color: "#fff" }}></i>
                </div>
                <h3>Network of experts</h3>
                <p className="mt-3">
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
      <section className="call-action section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-12 text-center">
              <div className="call-action-content">
                <h2>Ready to Discuss Your Business Goals?</h2>
                <p>
                  If you&#39;re a business owner planning your next move or looking to make an acquisition,
                  Sunny would love to understand your goals and dreams and explore how he can help you achieve them.
                </p>
                <div className="call-action-btn">
                  <Link href="/book-consultation" className="theme-btn">
                    Book a Discovery Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
