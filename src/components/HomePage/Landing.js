import "./Landing.css";
import React from "react";
import Container from "../UI/Container";
import Carousel from "react-multi-carousel";
import Button from "../UI/Button";
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
  },
};
const LandingItems = [
  {
    id: 0,
    title: "fast food restaurant",
    description:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
  },
  {
    id: 1,
    title: "fast food restaurant",
    description:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
  },
  {
    id: 2,
    title: "fast food restaurant",
    description:
      "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
  },
];
const Landing = () => {
  const CustomDot = ({ onClick, ...rest }) => {
    const { active } = rest;
    return (
      <button
        className={active ? "dots-item  active" : "dots-item  inactive"}
        aria-label="dot"
        onClick={() => onClick()}
      ></button>
    );
  };
  return (
    <section className="landing">
      <Container>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={6000}
          centerMode={false}
          className=""
          containerClass="container"
          customDot={<CustomDot />}
          dotListClass="carousel-dots"
          draggable={false}
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {LandingItems.map((item) => {
            return (
              <div className="text" key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Button
                  href="#Menu"
                  className="landing-btn"
                  aria-label="Menu Page"
                >
                  order now
                </Button>
              </div>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
};

export default React.memo(Landing);
