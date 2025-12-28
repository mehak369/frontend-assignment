import "./Header.css";

function Header() {
  return (
    <header className="growthzi_portfolio-header">
      <div className="growthzi_portfolio-header-wrapper">

        <div className="growthzi_portfolio-header-small">
          HI, MY NAME IS
        </div>

        <h1 className="growthzi_portfolio-header-name">
          Mukhammadyusuf
        </h1>

        <div className="growthzi_portfolio-header-title">
          I am a Software Engineer
        </div>

        <div className="growthzi_portfolio-header-exp">
          4+ years of making the job done in the Tech industry!
        </div>

        <div className="growthzi_portfolio-header-desc">
          I am a product-oriented Software Engineer with a business mindset
          from bringing the latest tech to launching successful startups!
        </div>

        <button className="growthzi_portfolio-header-btn">
          🚀 Lets Get Started!
        </button>

        <div className="growthzi_portfolio-header-logos">
          <div>Digital Generation</div>
          <div>Burberry</div>
          <div>epam</div>
          <div>Independent</div>
          <div>Davr Bank</div>
          <div>Molly’s</div>
        </div>

      </div>
    </header>
  );
}

export default Header;
