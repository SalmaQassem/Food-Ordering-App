import classes from "./ContactUs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import FooterHeader from "../UI/FooterHeader";

const ContactUs = () => {
  return (
    <div>
      <FooterHeader>contact us</FooterHeader>
      <div className={classes.box}>
        <a href="#Home" aria-label="Location">
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <span>Location</span>
        </a>
        <a href="#Home" aria-label="Phone">
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span> Call +01 1234567890</span>
        </a>
        <a href="#Home" aria-label="Email">
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span>demo@gmail.com</span>
        </a>
      </div>
    </div>
  );
};
export default ContactUs;
