export default function Form() {
  return (
    <>
      <div className="blog-c-form">
        <div className="bottom-title">
          <h2>Post Comments</h2>
        </div>
        <form className="form" method="post" action="mail/mail.php">
          <div className="row">
            <div className="col-md-4 col-md-4 col-xs-12">
              <div className="form-group">
                <label>
                  <span>
                    <i className="fa fa-user"></i>
                  </span>{" "}
                  Your Name
                </label>
                <input type="text" name="name" required="required" />
              </div>
            </div>
            <div className="col-md-4 col-md-4 col-xs-12">
              <div className="form-group">
                <label>
                  <span>
                    <i className="fa fa-envelope"></i>
                  </span>
                  Your Email
                </label>
                <input type="email" name="email" required="required" />
              </div>
            </div>
            <div className="col-md-4 col-md-4 col-xs-12">
              <div className="form-group">
                <label>
                  <span>
                    <i className="fa fa-globe"></i>
                  </span>
                  Your Website
                </label>
                <input type="url" name="website" required="required" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label>
                  <span>
                    <i className="fa fa-pencil"></i>
                  </span>
                  Your Comment
                </label>
                <textarea name="message" rows="6"></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group button">
                <button type="submit" className="theme-btn">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
