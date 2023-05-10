import "./Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div className="social">
      <a href="#Home" aria-label="Home Page" className="Item-header">
        feane
      </a>
      <p>
        Necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with
      </p>
      <div className="social-links">
        <a href="#Home" aria-label="Facebook Link">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#Home" aria-label="Twitter Link">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#Home" aria-label="LinkedIn Link">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="#Home" aria-label="Instagram Link">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#Home" aria-label="Pinterest Link">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
      </div>
    </div>
  );
};
export default Social;
