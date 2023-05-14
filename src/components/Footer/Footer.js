import classes from "./Footer.module.css";
import Container from "../UI/Container";
import ContactUs from "./ContactUs";
import Social from "./Social";
import Opening from "./Opening";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <Container>
        <div className={classes.box}>
          <div className={classes.item}>
            <ContactUs />
          </div>
          <div className={classes.item}>
            <Social />
          </div>
          <div className={classes.item}>
            <Opening />
          </div>
        </div>
        <div className={classes.info}>
          <p>
            &copy; {new Date().getFullYear()} All Rights Reserved By Free Html
            Templates
          </p>
          <p>&copy; Distributed By ThemeWagon</p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
