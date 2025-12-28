import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="growthzi_portfolio-testimonials">
      <div className="growthzi_portfolio-testimonials-wrapper">

        <h2>Testimonials</h2>

        <div className="growthzi_portfolio-testimonials-desc">
          I am a product-oriented Software Engineer with a business mindset
          from bringing the latest tech to launching successful startups!
        </div>

        <div className="growthzi_portfolio-testimonials-cards">

          {/* Testimonial 1 */}
          <div className="growthzi_portfolio-testimonial-card">
            <img
  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=200&q=80"
  alt="Igor Efrimidi"
  className="growthzi_portfolio-testimonial-img"
/>


            <h3>Igor Efrimidi</h3>

            <div className="growthzi_portfolio-testimonial-role">
              Software Engineer @ EPAM Systems
            </div>

            <div className="growthzi_portfolio-testimonial-text">
              I worked with Mukhammadyusuf at EPAM and was his resource manager.
              I can say that Yusuf is a very active and committed young man who
              is very passionate about technology and also has excellent design
              skills and understands the vector of the web industry.
            </div>

            <button className="growthzi_portfolio-testimonial-btn">
              Learn More →
            </button>
          </div>

          {/* Testimonial 2 */}
          <div className="growthzi_portfolio-testimonial-card">
            <img
  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&q=80"
  alt="Islomkhuja Akhrorov"
  className="growthzi_portfolio-testimonial-img"
/>


            <h3>Islomkhuja Akhrorov</h3>

            <div className="growthzi_portfolio-testimonial-role">
              Senior Software Engineer @ EPAM Systems
            </div>

            <div className="growthzi_portfolio-testimonial-text">
              It is with much enthusiasm that I recommend Mukhammadyusuf.
              I worked with him in Davr Bank. I noticed that Optimist while
              working and he was responsible for his job. Moreover, he has
              quite a few skills such as dedication, communication skills,
              leadership abilities, positive attitude, efficiency, commitment
              to quality and other relevant soft skills.
            </div>

            <button className="growthzi_portfolio-testimonial-btn">
              Learn More →
            </button>
          </div>

        </div>

        {/* Side button */}
        <div className="growthzi_portfolio-testimonials-side">
          <div className="growthzi_portfolio-testimonials-side-btn">
            All Testimonials →
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
