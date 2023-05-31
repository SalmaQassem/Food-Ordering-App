import classes from "./ContactUs.module.css";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import FooterHeader from "../UI/FooterHeader";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <FooterHeader>contact us</FooterHeader>
      <div className={classes.box}>
        <Link to="/Feane/" aria-label="Location">
          <span className={classes.icon}>
            <IoLocationSharp />
          </span>
          <span>Location</span>
        </Link>
        <Link to="/Feane/" aria-label="Phone">
          <span className={classes.icon}>
            <IoCall />
          </span>
          <span> Call +01 1234567890</span>
        </Link>
        <Link to="/Feane/" aria-label="Email">
          <span className={classes.icon}>
            <MdEmail />
          </span>
          <span>demo@gmail.com</span>
        </Link>
      </div>
    </div>
  );
};
export default ContactUs;
