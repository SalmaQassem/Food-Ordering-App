import "./HomePage.css";
import background from "../../images/hero-bg.webp";
import NavBar from "./NavBar";
import Landing from "./Landing";

const HomePage = () => {
  return (
    <section className="home" id="Home">
      <img src={background} alt="" />
      <NavBar />
      <Landing />
    </section>
  );
};
export default HomePage;
