"use client";

import HeaderBanner from "@/components/HeaderBanner";
import CalendlyWidget from "@/components/CalendlyWidget";

export default function BookConsultation() {
  return (
    <>
      <HeaderBanner 
        title="Book a Consultation"
        bannerType="consultation"
        height="400px"
        showOverlay={false}
      />
      
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="card shadow-sm border-0 p-4 mb-4">
                <div className="card-body text-center">
                  <h3 className="mb-3">Schedule Your Free 30-Minute Consultation</h3>
                  <p className="text-muted mb-4">
                    Speak with our business advisors about your goals and how we can help you achieve them.
                    Whether you&apos;re looking to buy or sell a business, we&apos;re here to guide you through the process.
                  </p>
                </div>
              </div>
              
              <CalendlyWidget 
                url="peakvalue/consultation"
                height={700}
                primaryColor="00265F"
                hideGdprBanner={true}
                className="mb-5"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
