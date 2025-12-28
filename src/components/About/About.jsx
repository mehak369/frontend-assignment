import "./About.css";

function About() {
  return (
    <section className="growthzi_portfolio-about">
      <div className="growthzi_portfolio-about-wrapper">

        <div className="growthzi_portfolio-about-image-box">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&q=80"
            alt="Profile"
            className="growthzi_portfolio-about-image"
          />
        </div>

        <div className="growthzi_portfolio-about-content">
          <h2>About Me</h2>

          <div className="growthzi_portfolio-about-text">
            Bringing modern technologies into the real world is my DNA.
            Worked on multiple startups and governmental projects to get the
            ideas into real-world mobile and web applications and developed
            successful Educational startups in Uzbekistan.
          </div>

          <button className="growthzi_portfolio-about-btn">
            😉 Download My Resume
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;
