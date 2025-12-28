import "./Contact.css";

function Contact() {
  return (
    <section className="growthzi_portfolio-contact">
      <div className="growthzi_portfolio-contact-wrapper">

        <h2>Contact me</h2>

        <div className="growthzi_portfolio-contact-desc">
          I am a product-oriented Software Engineer with a business mindset
          from bringing the latest tech to launching successful startups!
        </div>

        <div className="growthzi_portfolio-contact-form">

          <div className="growthzi_portfolio-contact-field">
            <div className="growthzi_portfolio-contact-label">Name</div>
            <input type="text" />
          </div>

          <div className="growthzi_portfolio-contact-field">
            <div className="growthzi_portfolio-contact-label">Label</div>
            <input type="text" />
          </div>

          <div className="growthzi_portfolio-contact-field">
            <div className="growthzi_portfolio-contact-label">Message</div>
            <textarea />
          </div>

          <div className="growthzi_portfolio-contact-btn-wrapper">
            <button className="growthzi_portfolio-contact-btn">
              Send
            </button>
          </div>

        </div>

        <div className="growthzi_portfolio-contact-socials">
  <a href="#" className="growthzi_portfolio-contact-social">
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
      alt="Instagram"
    />
  </a>

  <a href="#" className="growthzi_portfolio-contact-social">
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
      alt="LinkedIn"
    />
  </a>

  <a href="#" className="growthzi_portfolio-contact-social">
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
      alt="Email"
    />
  </a>
</div>


      </div>
    </section>
  );
}

export default Contact;
