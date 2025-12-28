import "./RecentCases.css";

function RecentCases() {
  return (
    <section className="growthzi_portfolio-cases">
      <div className="growthzi_portfolio-cases-wrapper">

        {/* Section Heading */}
        <h2>Recent Cases</h2>
        <div className="growthzi_portfolio-cases-desc">
          I am a product-oriented Software Engineer with a business mindset
          from bringing the latest tech to launching successful startups!
        </div>

        {/* Case 1 */}
        <div className="growthzi_portfolio-case-card">
          <div className="growthzi_portfolio-case-content">
            <h3>ipek yolu</h3>
            <div className="growthzi_portfolio-case-text">
              Online B2B marketplace with social automation possibilities.
            </div>

            <div className="growthzi_portfolio-case-icons">
              <div>🌐</div>
              <div>📱</div>
              <div>⚙️</div>
            </div>

            <button className="growthzi_portfolio-case-btn">
              Explore Now →
            </button>
          </div>

          <div className="growthzi_portfolio-case-image">
            <img
              src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400"
              alt="ipek yolu"
            />
          </div>
        </div>

        {/* Case 2 */}
        <div className="growthzi_portfolio-case-card">
          <div className="growthzi_portfolio-case-content">
            <h3>PUBG Arena</h3>
            <div className="growthzi_portfolio-case-text">
              PUBG Arena is an online match ticket selling application
              specifically for PUBG Mobile.
            </div>

            <div className="growthzi_portfolio-case-icons">
              <div>🎮</div>
              <div>📱</div>
            </div>

            <button className="growthzi_portfolio-case-btn">
              Explore Case Study →
            </button>
          </div>

          <div className="growthzi_portfolio-case-image">
            <img
              src="https://images.pexels.com/photos/394568/pexels-photo-394568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400"
              alt="PUBG Arena"
            />
          </div>
        </div>

        {/* Case 3 */}
        <div className="growthzi_portfolio-case-card">
          <div className="growthzi_portfolio-case-content">
            <h3>Leader Finance</h3>
            <div className="growthzi_portfolio-case-text">
              Leader Finance is an Uzbek finance company. We redesigned
              and fixed their technical problems.
            </div>

            <button className="growthzi_portfolio-case-btn">
              Explore Case Study →
            </button>
          </div>

          <div className="growthzi_portfolio-case-image">
            <img
              src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400"
              alt="Leader Finance"
            />
          </div>
        </div>

        {/* Other Cases */}
        <div className="growthzi_portfolio-other-cases">
          <h2>Other cases</h2>
          <div>
            Explore more about other case studies and projects I have done!
          </div>

          <button className="growthzi_portfolio-case-btn">
            All Case Studies →
          </button>
        </div>

      </div>
    </section>
  );
}

export default RecentCases;
