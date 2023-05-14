import classes from "./Social.module.css";
import FooterHeader from "../UI/FooterHeader";
import FooterParagraph from "../UI/FooterParagraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className={classes.social}>
      <FooterHeader>
        <Link to="/" className={classes.header} aria-label="Home Page">
          feane
        </Link>
      </FooterHeader>
      <FooterParagraph>
        Necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with
      </FooterParagraph>
      <div className={classes.links}>
        <Link to="/" aria-label="Facebook Link">
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link to="/" aria-label="Twitter Link">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link to="/" aria-label="LinkedIn Link">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
        <Link to="/" aria-label="Instagram Link">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to="/" aria-label="Pinterest Link">
          <FontAwesomeIcon icon={faPinterest} />
        </Link>
      </div>
    </div>
  );
};
export default Social;
