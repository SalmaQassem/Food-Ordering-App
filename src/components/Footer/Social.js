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
      <a href="#Home" className="Item-header">
        feane
      </a>
      <p>
        Necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with
      </p>
      <div className="social-links">
        <a href="#Home">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#Home">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#Home">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="#Home">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#Home">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
      </div>
    </div>
  );
};
export default Social;
