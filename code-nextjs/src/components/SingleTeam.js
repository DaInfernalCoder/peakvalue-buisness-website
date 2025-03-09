import Image from "next/image";

import TeamImg from "../../public/images/team/1.jpg";
import Link from "next/link";

export default function SingleTeam(props) {
  const { image, name, designation } = props;
  
  // Check if this is Amita's photo to apply specific styling
  const isAmitaPhoto = name === "Amita Datta";

  return (
    <>
      <div className="single-team text-center">
        <div className="team-img">
          <Image
            src={image ? image : TeamImg}
            alt={name || "Team Member"}
            width={255}
            height={330}
            style={{
              objectFit: "cover",
              // If it's Amita's photo, adjust the positioning to focus on face area
              objectPosition: isAmitaPhoto ? "center 25%" : "center",
            }}
          />
        </div>
        <div className="team-bottom">
          <div className="team-content">
            <h4>{name ? name : "Sam Martin"}</h4>
            <p>{designation ? designation : "Web Designer"}</p>
          </div>
        </div>
      </div>
    </>
  );
}
