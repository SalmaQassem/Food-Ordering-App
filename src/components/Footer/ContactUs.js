import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div className="contact">
      <h4 className="Item-header">contact us</h4>
      <div className="contact-box">
        <a href="#Home" aria-label="Location">
          <span className="contact-icon">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <span className="contact-text">Location</span>
        </a>
        <a href="#Home" aria-label="Phone">
          <span className="contact-icon">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span className="contact-text"> Call +01 1234567890</span>
        </a>
        <a href="#Home" aria-label="Email">
          <span className="contact-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="contact-text">demo@gmail.com</span>
        </a>
      </div>
    </div>
  );
};
export default ContactUs;
