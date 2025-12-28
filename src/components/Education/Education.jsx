import "./Education.css";

function Education() {
  return (
    <section className="growthzi_portfolio-education">
      <div className="growthzi_portfolio-education-wrapper">

        <h2>Education</h2>

        <div className="growthzi_portfolio-education-desc">
          I am a product-oriented Software Engineer with a business mindset
          from bringing the latest tech to launching successful startups!
        </div>

        {/* Card 1 */}
        <div className="growthzi_portfolio-education-card">
          <div className="growthzi_portfolio-education-logo">
            W
          </div>

          <div className="growthzi_portfolio-education-content">
            <h3>Whitworth University</h3>
            <div>Bachelor of Science - BS, Computer Science</div>
            <div>Sep 2022 – May 2026</div>
            <div>
              Computer science at Whitworth is a robust and innovative program
              where students learn practical computational skills and apply
              them to solve real-world problems.
            </div>
          </div>

          <button className="growthzi_portfolio-education-btn">
            Learn More →
          </button>
        </div>

        {/* Card 2 */}
        <div className="growthzi_portfolio-education-card">
          <div className="growthzi_portfolio-education-logo">
            IU
          </div>

          <div className="growthzi_portfolio-education-content">
            <h3>Inha University</h3>
            <div>Bachelor of Science - BS, Computer Science</div>
            <div>Sep 2020 – May 2022</div>
            <div>
              Inha University provides strong theoretical and practical
              backgrounds essential for solving real-world engineering
              challenges.
            </div>
          </div>

          <button className="growthzi_portfolio-education-btn">
            Learn More →
          </button>
        </div>

        {/* Card 3 */}
        <div className="growthzi_portfolio-education-card">
          <div className="growthzi_portfolio-education-logo">
            AL
          </div>

          <div className="growthzi_portfolio-education-content">
            <h3>Academic Lyceum</h3>
            <div>High School Diploma — Database Manager</div>
            <div>Sep 2018 – Jun 2020</div>
            <div>
              The Academic Lyceum of Westminster International University
              provides a strong academic foundation in technology and databases.
            </div>
          </div>

          <button className="growthzi_portfolio-education-btn">
            Learn More →
          </button>
        </div>

      </div>
    </section>
  );
}

export default Education;
