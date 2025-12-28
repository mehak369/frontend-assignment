import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import RecentCases from "../../components/RecentCases/RecentCases";
import Testimonials from "../../components/Testimonials/Testimonials";
import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";
import "./Home.css";

function Home() {
  return (
    <div className="growthzi_portfolio-home">
      <Header />
      <About />
      <RecentCases />
      <Testimonials />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default Home;
