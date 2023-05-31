import classes from "./About.module.css";
import Container from "../UI/Container";
import Header from "../UI/Header";
import Button from "../UI/Button";
import AboutImg from "../../images/about-img.webp";

const About = () => {
  return (
    <section className={classes.about}>
      <Container>
        <div className={classes.box}>
          <div className={classes.imagerContainer}>
            <img src={AboutImg} alt="about_img" loading="lazy"></img>
          </div>
          <div className={classes.text}>
            <Header>we are feane</Header>
            <p className={classes.p}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All
            </p>
            <Button
              to="/Feane/About"
              aria-label="About Page"
              className={classes.a}
            >
              read more
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default About;
