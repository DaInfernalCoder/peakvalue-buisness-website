import Image from "next/image";
import PaymentImg from "../../../public/images/payment-img.png";
import Link from "next/link";

export default function Copyright() {
  return (
    <>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="copyright-text">
                <p>
                  Copyright © 2024 Bonik. Design by {""}
                  <Link href="https://pixetheme.com/" target="_blank">
                    PixeTheme
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="footer-bottom-img text-right">
                <Image src={PaymentImg} alt="#" width={254} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
