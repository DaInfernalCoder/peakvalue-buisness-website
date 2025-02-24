import Link from "next/link";
import Image from "next/image";

import CommentImg1 from "../../../public/images/comment-1.jpg";
import CommentImg2 from "../../../public/images/comment-2.jpg";
import CommentImg3 from "../../../public/images/comment-3.jpg";

export default function Comments() {
  return (
    <>
      <div className="blog-comments">
        <div className="bottom-title">
          <h2>
            Total <span>(03)</span> comments
          </h2>
        </div>
        <div className="comments-body">
          {/* <!-- Single Comments --> */}
          <div className="single-comments">
            <div className="main">
              <div className="head">
                <Image src={CommentImg1} alt="#" width={80} height={80} />
              </div>
              <div className="body">
                <h4>
                  Hero alam
                  <span className="meta">18 days ago</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea.
                  <span className="reply">
                    <i className="fa fa-reply"></i>
                    <Link href="#">Replay</Link>
                  </span>
                </p>
              </div>
            </div>
            {/* <!-- Comment Reply --> */}
            <div className="comment-list">
              <div className="head">
                <Image src={CommentImg2} alt="#" width={80} height={80} />
              </div>
              <div className="body">
                <h4>
                  Shakil hossain <span className="meta">1 month ago</span>
                </h4>
                <p>
                  orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim venia.
                  <span className="reply">
                    <i className="fa fa-reply"></i>
                    <Link href="#">Replay</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Single Comments --> */}
          <div className="single-comments">
            <div className="main">
              <div className="head">
                <Image src={CommentImg3} alt="#" width={80} height={80} />
              </div>
              <div className="body">
                <h4>
                  Ali akbar
                  <span className="meta">2 month ago</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                  <span className="reply">
                    <i className="fa fa-reply"></i>
                    <Link href="#">Replay</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
