import classes from "./Social.module.css";
import FooterHeader from "../UI/FooterHeader";
import FooterParagraph from "../UI/FooterParagraph";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className={classes.social}>
      <FooterHeader>
        <Link to="/Feane/" className={classes.header} aria-label="Home Page">
          feane
        </Link>
      </FooterHeader>
      <FooterParagraph>
        Necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with
      </FooterParagraph>
      <div className={classes.links}>
        <Link to="/Feane/" aria-label="Facebook Link">
          <FaFacebookF />
        </Link>
        <Link to="/Feane/" aria-label="Twitter Link">
          <FaTwitter />
        </Link>
        <Link to="/Feane/" aria-label="LinkedIn Link">
          <FaLinkedinIn />
        </Link>
        <Link to="/Feane/" aria-label="Instagram Link">
          <FaInstagram />
        </Link>
        <Link to="/Feane/" aria-label="Pinterest Link">
          <FaPinterest />
        </Link>
      </div>
    </div>
  );
};
export default Social;
