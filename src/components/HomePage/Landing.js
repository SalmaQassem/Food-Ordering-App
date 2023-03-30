import "./Landing.css";
import Container from "../UI/Container";
import Button from "../UI/Button";

const Landing = () => {
  return (
    <section className="landing">
      <div className="slider">
        <div className="slide">
          <Container>
            <div className="text">
              <h1>fast food restaurant</h1>
              <p>
                Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                sapiente ad mollitia laborum quam quisquam esse error unde.
                Tempora ex doloremque, labore, sunt repellat dolore, iste magni
                quos nihil ducimus libero ipsam.
              </p>
              <Button className="landing-btn" href="#Shop">
                order now
              </Button>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <ul className="dots-list">
          <li className="active"></li>
          <li></li>
          <li></li>
        </ul>
      </Container>
    </section>
  );
};

export default Landing;
