"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import HeaderBanner from "@/components/HeaderBanner";

export default function Process() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <HeaderBanner 
        title="Process" 
        titleWidth="1000px"
        bannerType="process"
        showOverlay={false}
      />
      
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>Our Process</h2>
              <p style={{ fontSize: '16px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                We follow a structured and collaborative process to ensure the successful delivery of exceptional results for our clients. 
                Our proven approach has been carefully crafted to maximize your business value.
              </p>
              
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps in Grid Layout */}
      <div className="container">
        <div className="row">
          {/* Step 1 */}
          <div className="col-lg-6 mb-5">
            <div style={{ display: 'flex', height: '100%' }}>
              <div style={{ 
                fontSize: '120px', 
                fontWeight: '800', 
                lineHeight: '1', 
                opacity: '0.8',
                marginRight: '25px',
                color: '#00265F'
              }}>
                01
              </div>
              <div>
                <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '700' }}>Initial Conversation</h3>
                <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                  We begin with a confidential consultation to understand your goals, timeline, and reasons for selling. 
                  This critical first step helps us assess your business&#39;s unique situation and develop a tailored approach.
                </p>
                <ul style={{ listStyleType: 'none', padding: '0', marginTop: '15px' }}>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Understand your objectives
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Assess your timeline
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Discuss confidentiality concerns
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-lg-6 mb-5">
            <div style={{ display: 'flex', height: '100%' }}>
              <div style={{ 
                fontSize: '120px', 
                fontWeight: '800', 
                lineHeight: '1', 
                opacity: '0.8',
                marginRight: '25px',
                color: '#00265F'
              }}>
                02
              </div>
              <div>
                <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '700' }}>Business Value Assessment</h3>
                <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                  Our team conducts a comprehensive business valuation using multiple methodologies to determine an optimal asking price. 
                  We analyze financial history, growth potential, market conditions, and comparable sales.
                </p>
                <ul style={{ listStyleType: 'none', padding: '0', marginTop: '15px' }}>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Financial analysis & forecasting
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Market research
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Benchmark against comparable sales
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-lg-6 mb-5">
            <div style={{ display: 'flex', height: '100%' }}>
              <div style={{ 
                fontSize: '120px', 
                fontWeight: '800', 
                lineHeight: '1', 
                opacity: '0.8',
                marginRight: '25px',
                color: '#00265F'
              }}>
                03
              </div>
              <div>
                <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '700' }}>Preparing Company</h3>
                <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                  We help prepare your business for sale by identifying and addressing any issues that could impact its value or attractiveness to buyers. 
                  This includes organizing financial records, streamlining operations, and creating compelling marketing materials.
                </p>
                <ul style={{ listStyleType: 'none', padding: '0', marginTop: '15px' }}>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Financial document preparation
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Business improvement strategies
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Creation of confidential information memorandum
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="col-lg-6 mb-5">
            <div style={{ display: 'flex', height: '100%' }}>
              <div style={{ 
                fontSize: '120px', 
                fontWeight: '800', 
                lineHeight: '1', 
                opacity: '0.8',
                marginRight: '25px',
                color: '#00265F'
              }}>
                04
              </div>
              <div>
                <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '700' }}>Screening Buyers</h3>
                <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                  We leverage our extensive network to identify and qualify potential buyers while maintaining strict confidentiality. 
                  Each prospect is carefully vetted for financial capability, industry experience, and strategic fit to ensure only serious candidates proceed.
                </p>
                <ul style={{ listStyleType: 'none', padding: '0', marginTop: '15px' }}>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Confidential marketing to qualified buyers
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Pre-qualification of interested parties
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Facilitate meetings with vetted prospects
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Manage negotiations and offers
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="col-lg-6 mb-5">
            <div style={{ display: 'flex', height: '100%' }}>
              <div style={{ 
                fontSize: '120px', 
                fontWeight: '800', 
                lineHeight: '1', 
                opacity: '0.8',
                marginRight: '25px',
                color: '#00265F'
              }}>
                05
              </div>
              <div>
                <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '700' }}>Closing the Deal</h3>
                <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                  We guide you through the due diligence process, coordinate with legal and financial professionals, and facilitate negotiations to achieve optimal terms. 
                  Our team manages the complex closing process to ensure a smooth transition and successful sale.
                </p>
                <ul style={{ listStyleType: 'none', padding: '0', marginTop: '15px' }}>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Due diligence coordination
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Negotiate final terms and structure
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Coordinate with legal and tax advisors
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: '#00265F', 
                      borderRadius: '50%', 
                      marginRight: '10px' 
                    }}></span>
                    Facilitate smooth transition and closing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Move CallToAction outside of the container div */}
      <CallToAction 
      />
    </>
  );
}
