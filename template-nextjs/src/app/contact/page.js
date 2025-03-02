import Link from "next/link";
import HeaderBanner from "@/components/HeaderBanner";
import Contact from "../Home/Contact";

export default function ContactPage() {
  return (
    <>
      <HeaderBanner 
        title="Contact Us"
        titleWidth="1000px"
        bannerType="contact"
        showOverlay={false}
      />
      <Contact />
    </>
  );
}
