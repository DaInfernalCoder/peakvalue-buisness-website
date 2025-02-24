import Image from "next/image";

import TeamImg from "../../public/images/team/1.jpg";
import Link from "next/link";

export default function SingleTeam(props) {
  const { image, name, designation } = props;

  return (
    <>
      <div className="single-team text-center">
        <div className="team-img">
          <Image
            src={image ? image : TeamImg}
            alt="#"
            width={255}
            height={330}
          />
        </div>
        <div className="team-bottom">
          <div className="team-content">
            <h4>{name ? name : "Sam Martin"}</h4>
            <p>{designation ? designation : "Web Designer"}</p>
          </div>
          <div className="team-social">
            <ul>
              <li>
                <Link href="#">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa fa-dribbble"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
