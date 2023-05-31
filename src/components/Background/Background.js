import classes from "./Background.module.css";
import background from "../../images/hero-bg.webp";

const Background = (props) => {
  return (
    <section
      className={props.class === "sub" ? `${classes.sub}` : classes.background}
    >
      <div
        className={
          props.class === "sub" ? `${classes.subImage}` : classes.image
        }
      >
        <img src={background} alt="background"></img>
      </div>
      {props.children}
    </section>
  );
};

export default Background;
