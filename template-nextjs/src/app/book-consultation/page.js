"use client";

import Breadcrumbs from "@/components/Breadcrumbs";

export default function BookConsultation() {
  return (
    <>
      <Breadcrumbs 
        pageTitle="Book a Consultation"
        pageName="Book Consultation"
      />
      
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="calendly-inline-widget" 
                data-url="https://calendly.com/YOUR_CALENDLY_LINK" 
                style={{minWidth: '320px', height: '700px'}}
              />
              <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
