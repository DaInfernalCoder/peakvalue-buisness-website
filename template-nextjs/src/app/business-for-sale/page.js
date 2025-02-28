"use client";

import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";
import Link from "next/link";
import HeaderBanner from "@/components/HeaderBanner";

export default function BusinessForSale() {
  return (
    <>
      {/* Hero Section with Banner */}
      <HeaderBanner 
        title="Businesses For Sale" 
        titleWidth="1000px"
        showOverlay={false} // Disable the blue overlay to only show the image
      />
      
      <section className="section-padding" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-20">
              <SectionTitle
                smTitle="Listings"
                title="Premium Business Listings"
                description="Explore our exclusive selection of vetted businesses with proven financial performance"
              />
            </div>
          </div>
          
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-lg-12">
              <div style={{ 
                backgroundColor: "white",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                padding: "50px 40px",
                textAlign: "center",
                borderTop: "5px solid #00265F"
              }}>
                <div style={{ 
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 38, 95, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 25px"
                }}>
                  <i className="fa fa-search" style={{ 
                    fontSize: "40px", 
                    color: "#00265F" 
                  }}></i>
                </div>
                
                <h2 style={{ 
                  fontSize: "28px", 
                  fontWeight: "700", 
                  marginBottom: "20px",
                  color: "#333"
                }}>
                  Looking for Premium Business Opportunities?
                </h2>
                
                <p style={{ 
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#666",
                  maxWidth: "800px",
                  margin: "0 auto 30px"
                }}>
                  Our carefully selected business listings are available to qualified buyers after completing a confidentiality agreement. 
                  Contact us today to discuss your acquisition criteria and gain access to our current on-market and off-market opportunities.
                </p>
                
                <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                  <Link href="/contact" style={{
                    display: "inline-block",
                    padding: "15px 35px",
                    backgroundColor: "#00265F",
                    color: "white",
                    borderRadius: "5px",
                    fontWeight: "600",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 5px 15px rgba(0, 38, 95, 0.2)"
                  }}>
                    Contact Us
                  </Link>
                  
                  <Link href="/book-consultation" style={{
                    display: "inline-block",
                    padding: "15px 35px",
                    backgroundColor: "white",
                    color: "#00265F",
                    border: "2px solid #00265F",
                    borderRadius: "5px",
                    fontWeight: "600",
                    textDecoration: "none",
                    transition: "all 0.3s ease"
                  }}>
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Seller CTA */}
          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-lg-12">
              <div style={{ 
                backgroundImage: "linear-gradient(135deg, rgba(0, 38, 95, 0.95), rgba(0, 38, 95, 0.85)), url('/images/breadcrumbs-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "50px 40px",
                borderRadius: "10px",
                color: "white",
                textAlign: "center"
              }}>
                <h3 style={{ 
                  fontSize: "28px", 
                  fontWeight: "700", 
                  marginBottom: "20px",
                  color: "white"
                }}>
                  Selling Your Business?
                </h3>
                
                <p style={{ 
                  fontSize: "16px",
                  lineHeight: "1.7",
                  maxWidth: "800px",
                  margin: "0 auto 30px",
                  color: "rgba(255, 255, 255, 0.9)"
                }}>
                  If you&apos;re considering selling your business, our team of experts can help you navigate the process 
                  with confidentiality and professionalism to achieve maximum value. Let us represent your business
                  to our network of qualified buyers.
                </p>
                
                <Link href="/contact" style={{
                  display: "inline-block",
                  padding: "15px 35px",
                  backgroundColor: "white",
                  color: "#00265F",
                  borderRadius: "5px",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
                }}>
                  List Your Business
                </Link>
              </div>
            </div>
          </div>
          
          {/* Confidentiality Note */}
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col-lg-12">
              <div style={{ 
                backgroundColor: "rgba(0, 38, 95, 0.05)", 
                padding: "30px", 
                borderRadius: "10px",
                borderLeft: "4px solid #00265F" 
              }}>
                <h4 style={{ marginBottom: "15px", color: "#333" }}>Confidentiality Notice</h4>
                <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.7" }}>
                  All business opportunities are listed with limited information to protect seller confidentiality. 
                  Serious buyers must complete a confidentiality agreement before receiving detailed information 
                  about any business. Contact us to learn more about these opportunities or to discuss your 
                  specific acquisition criteria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Ready to Explore Business Acquisition?" 
        description="Schedule a confidential consultation to discuss your acquisition criteria and gain access to our premium business listings, including off-market opportunities."
        buttonText="Schedule a Consultation"
      />
    </>
  );
}
