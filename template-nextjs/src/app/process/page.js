"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";

export default function Process() {
  return (
    <>
      <Breadcrumbs pageTitle="Our Process" pageName="Process" />
      
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                title="Our Process"
                paragraph="How we help you buy or sell your business"
              />
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-4">
              <div className="process-box">
                <div className="process-number">1</div>
                <h3>Initial Consultation</h3>
                <p>We begin with a detailed discussion of your goals, timeline, and business requirements.</p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="process-box">
                <div className="process-number">2</div>
                <h3>Valuation & Analysis</h3>
                <p>Our experts conduct a thorough market analysis and business valuation.</p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="process-box">
                <div className="process-number">3</div>
                <h3>Strategy Development</h3>
                <p>We create a customized strategy to achieve your business goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
