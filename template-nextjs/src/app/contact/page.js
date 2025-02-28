import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "../Home/Contact";
import Client from "../Home/Client";

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs
        title="Contact"
        description="Reach out to us to schedule a consultation or learn more about our services!"
        menuLink="contact"
        menuText="Contact"
      />
      <Contact />
      {/* <!-- Google-Maps --> */}
      <div className="maps-area">
        <div className="main-maps">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
          <Link href="https://www.whatismyip-address.com/divi-discount/"></Link>
        </div>
      </div>
      <Client />
    </>
  );
}
