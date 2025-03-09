import Image from "next/image";
import Link from "next/link";
import AuthorImg from "../../../public/images/author-img.jpg";

export default function Author() {
  return (
    <>
      <div className="post-author-box">
        <div className="author-img">
          <Image src={AuthorImg} alt="#" width={100} height={100} />
        </div>
        <div className="author-content">
          <h3>Meheraj Hossain</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip .{" "}
          </p>
        </div>
        <div className="author-social">
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
                <i className="fa fa-dribbble"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fa fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
