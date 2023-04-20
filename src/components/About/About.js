import "./About.css";
import Container from "../UI/Container";
import Button from "../UI/Button";
import AboutImg from "../../images/about-img.webp";

const About = () => {
  return (
    <section id="About">
      <Container>
        <div className="about-box">
          <div className="about-img">
            <img src={AboutImg} alt=""></img>
          </div>
          <div className="about-text">
            <h2>we are feane</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All
            </p>
            <Button>read more</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default About;
