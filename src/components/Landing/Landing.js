import classes from "./Landing.module.css";
import React from "react";
import Container from "../UI/Container";
import Carousel from "react-multi-carousel";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
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
const Landing = () => {
  const landingItems = useSelector((state) => state.landing.items);
  const CustomDot = ({ onClick, ...rest }) => {
    const { active } = rest;
    return (
      <li
        className={
          active ? `${classes.dot}  ${classes.active}` : `${classes.dot}`
        }
        aria-label="dot"
        onClick={() => onClick()}
      ></li>
    );
  };
  return (
    <section className={classes.landing}>
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
          dotListClass={classes.dots}
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
          {landingItems.map((item) => {
            return (
              <div className={classes.text} key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Button
                  to="/Food-Ordering-App/Menu"
                  className={classes.button}
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
