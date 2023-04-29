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
      <h6 className="Item-header">contact us</h6>
      <div className="contact-box">
        <a href="#Home">
          <span className="contact-icon">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <span className="contact-text">Location</span>
        </a>
        <a href="#Home">
          <span className="contact-icon">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span className="contact-text"> Call +01 1234567890</span>
        </a>
        <a href="#Home">
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
