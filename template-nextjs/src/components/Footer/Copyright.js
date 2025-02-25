import Link from "next/link";

export default function Copyright() {
  return (
    <>
      <div className="copyright py-4 border-top border-secondary mt-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-text text-center text-white">
                <p>
                  Copyright © {new Date().getFullYear()} PeakValue Business. All rights reserved. 
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
