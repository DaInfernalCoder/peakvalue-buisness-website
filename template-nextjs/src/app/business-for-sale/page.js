"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";

export default function BusinessForSale() {
  return (
    <>
      <Breadcrumbs pageTitle="Businesses For Sale" pageName="Businesses For Sale" />
      
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                title="Premium Business Opportunities"
                paragraph="Explore our exclusive selection of vetted businesses with proven financial performance"
              />
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-12">
              <div className="business-listings">
                {/* This section will be populated with actual business listings */}
                <div className="alert alert-info">
                  Our carefully selected business listings will be available soon. Contact us to discuss current off-market opportunities or to join our buyer&#39;s list for early access.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
