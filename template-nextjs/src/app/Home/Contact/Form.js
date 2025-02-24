export default function Form() {
  return (
    <form action="mail/mail.php" method="post">
      <div className="contact-form">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required="required"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required="required"
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-12">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                required="required"
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-12">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message *"
                required="required"
              ></textarea>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-group contact-button">
              <button type="submit" className="theme-btn">
                submit now
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
