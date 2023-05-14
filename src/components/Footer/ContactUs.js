import classes from "./ContactUs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import FooterHeader from "../UI/FooterHeader";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <FooterHeader>contact us</FooterHeader>
      <div className={classes.box}>
        <Link to="/Food-Ordering-App/" aria-label="Location">
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <span>Location</span>
        </Link>
        <Link to="/Food-Ordering-App/" aria-label="Phone">
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span> Call +01 1234567890</span>
        </Link>
        <Link to="/Food-Ordering-App/" aria-label="Email">
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span>demo@gmail.com</span>
        </Link>
      </div>
    </div>
  );
};
export default ContactUs;
