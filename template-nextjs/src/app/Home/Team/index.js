import SectionTitle from "@/components/SectionTitle";
import SingleTeam from "@/components/SingleTeam";

import TeamImg1 from "../../../../public/images/team/1.jpg";
import TeamImg2 from "../../../../public/images/team/2.jpg";

export default function Team() {
  return (
    <>
      {/* <!-- Team Area --> */}
      <section className="team-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Team"
                title="Creative Minds"
                description="Our team brings extensive experience in strategizing and leading organizations through change and growth. We specialize in helping start-ups and mid-market companies make successful exits and grow through acquisitions."
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <SingleTeam
                image={TeamImg1}
                name="Sunny Datta"
                designation="Founder & CEO"
              />
            </div>

            <div
              className="col-lg-4 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <SingleTeam
                image={TeamImg2}
                name="Amita Datta"
                designation="Strategy Director"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Team Area --> */}
    </>
  );
}
