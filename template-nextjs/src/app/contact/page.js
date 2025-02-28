import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "../Home/Contact";

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
    </>
  );
}
