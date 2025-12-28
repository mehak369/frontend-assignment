import "./Skills.css";

function Skills() {
  return (
    <section className="growthzi_portfolio-skills">
      <div className="growthzi_portfolio-skills-wrapper">

        <h2>Skills</h2>

        <div className="growthzi_portfolio-skills-desc">
          Skilled in designing scalable architectures, building efficient
          applications, and delivering clean, maintainable code aligned with
          best engineering practices.
        </div>

        {/* Card 1 */}
        <div className="growthzi_portfolio-skill-card">
          <img
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200"
            alt="Programming Languages"
            className="growthzi_portfolio-skill-img"
          />

          <div className="growthzi_portfolio-skill-content">
            <h3>Programming Languages</h3>
            <div>Java, Python, C++, JavaScript, TypeScript</div>
            <button className="growthzi_portfolio-skill-btn">
              See Projects →
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="growthzi_portfolio-skill-card">
          <img
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200"
            alt="Web Development"
            className="growthzi_portfolio-skill-img"
          />

          <div className="growthzi_portfolio-skill-content">
            <h3>Web Development</h3>
            <div>
              HTML5, CSS3, React.js, Angular, Node.js, Express.js
            </div>
            <button className="growthzi_portfolio-skill-btn">
              See Projects →
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="growthzi_portfolio-skill-card">
          <img
            src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200"
            alt="Mobile Development"
            className="growthzi_portfolio-skill-img"
          />

          <div className="growthzi_portfolio-skill-content">
            <h3>Mobile Development</h3>
            <div>
              Flutter, React Native, Kotlin (if applicable)
            </div>
            <button className="growthzi_portfolio-skill-btn">
              See Projects →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
