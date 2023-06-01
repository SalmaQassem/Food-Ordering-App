import classes from "./Login.module.css";
import Container from "../UI/Container";
import loginImg from "../../images/about-img.webp";
import { FaUser, FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import MainButton from "../UI/MainButton";
const Login = () => {
  return (
    <section>
      <Container>
        <div className={classes.loginContainer}>
          <div className={classes.image}>
            <img src={loginImg} alt="login-img" />
          </div>
          <div className={classes.formContainer}>
            <div className={classes.head}>
              <h1>welcome back!</h1>
              <p>Login to continue</p>
            </div>
            <form className={classes.form}>
              <div className={classes.inputs}>
                <div className={classes.input}>
                  <div className={classes.icon}>
                    <FaUser />
                  </div>
                  <input type="email" placeholder="enter email"></input>
                </div>
                <div className={classes.input}>
                  <div className={classes.icon}>
                    <FaUnlockAlt />
                  </div>
                  <input type="password" placeholder="enter password"></input>
                </div>
              </div>
              <div className={classes.submit}>
                <MainButton type="submit">login</MainButton>
                <Link>forget password?</Link>
              </div>
            </form>
            <div className={classes.signup}>
              <p>Don't have an account?</p>
              <Link>sign up</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Login;
