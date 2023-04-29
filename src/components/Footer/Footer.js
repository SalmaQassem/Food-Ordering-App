import "./Footer.css";
import Container from "../UI/Container";
import ContactUs from "./ContactUs";
import Social from "./Social";
import Opening from "./Opening";

const Footer = () => {
  return (
    <section id="Footer">
      <Container>
        <div className="footer-box">
          <div className="footer-item">
            <ContactUs />
          </div>
          <div className="footer-item">
            <Social />
          </div>
          <div className="footer-item">
            <Opening />
          </div>
        </div>
        <div className="footer-info">
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
