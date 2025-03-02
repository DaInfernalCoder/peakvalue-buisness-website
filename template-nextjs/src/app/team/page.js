import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import SingleTeam from "@/components/SingleTeam";

import TeamImg1 from "../../../public/images/team/1.jpg";
import TeamImg2 from "../../../public/images/team/2.jpg";

export default function Team() {
  return (
    <>
      <Breadcrumbs
        title="Our Team"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        menuLink="team"
        menuText="Team"
      />

      {/* <!-- Team Area --> */}
      <section className="team-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smtitle="Team"
                title="Creative Minds"
                description="All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
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
              data-wow-duration="1.2s"
            >
              <SingleTeam
                image={TeamImg2}
                name="Johnny Doe"
                designation="Ceo, Developer"
              />
            </div>

            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.3s"
            >
              <SingleTeam
                image={TeamImg1}
                name="Alex Smith"
                designation="Founder, Director"
              />
            </div>

            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.4s"
            >
              <SingleTeam
                image={TeamImg2}
                name="Anamika Dome"
                designation="Digital Marketer"
              />
            </div>
            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <SingleTeam
                image={TeamImg1}
                name="Jonathon Will"
                designation="Article Writter"
              />
            </div>

            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.2s"
            >
              <SingleTeam
                image={TeamImg2}
                name="Hipolika Noir"
                designation="Creative Designer"
              />
            </div>

            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.3s"
            >
              <SingleTeam
                image={TeamImg1}
                name="Ostadam Jonab"
                designation="SEO Expert"
              />
            </div>

            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.4s"
            >
              <SingleTeam
                image={TeamImg2}
                name="William Jack"
                designation="Developer, Designer"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Team Area --> */}
    </>
  );
}
