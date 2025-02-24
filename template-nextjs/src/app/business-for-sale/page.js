"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";

export default function BusinessForSale() {
  return (
    <>
      <Breadcrumbs pageTitle="Business for Sale" pageName="Business for Sale" />
      
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                title="Available Businesses"
                paragraph="Browse our curated selection of businesses for sale"
              />
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-12">
              <div className="business-listings">
                {/* This section will be populated with actual business listings */}
                <div className="alert alert-info">
                  Business listings coming soon. Please check back or contact us for current opportunities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
