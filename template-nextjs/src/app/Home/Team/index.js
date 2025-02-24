import SectionTitle from "@/components/SectionTitle";
import SingleTeam from "@/components/SingleTeam";

import TeamImg1 from "../../../../public/images/team/1.jpg";
import TeamImg2 from "../../../../public/images/team/2.jpg";
import TeamImg3 from "../../../../public/images/team/3.jpg";
import TeamImg4 from "../../../../public/images/team/4.jpg";

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
                description="  All the lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet."
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <SingleTeam
                image={TeamImg1}
                name="Sam Martin"
                designation="Web Designer"
              />
            </div>

            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <SingleTeam
                image={TeamImg2}
                name="Johnny Doe"
                designation="Ceo, Developer"
              />
            </div>

            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.2s"
            >
              <SingleTeam
                image={TeamImg3}
                name="Alex Smith"
                designation="Founder, Director"
              />
            </div>

            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.3s"
            >
              <SingleTeam
                image={TeamImg4}
                name="Anamika Dome"
                designation="Digital Marketer"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Team Area --> */}
    </>
  );
}
