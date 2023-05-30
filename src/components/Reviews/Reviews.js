import classes from "./Reviews.module.css";
import Container from "../UI/Container";
import Header from "../UI/Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewItem from "./ReviewItem";
import AddButton from "../UI/AddButton";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 767 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Reviews = () => {
  const reviews = useSelector((state) => state.reviews.items);
  const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className={classes.sliderButtons}>
        <AddButton
          className={classes.leftButton}
          aria-label="add"
          onClick={() => previous()}
        >
          <FaChevronLeft />
        </AddButton>
        <AddButton
          className={classes.rightButton}
          aria-label="add"
          onClick={() => goToSlide(currentSlide + 1)}
        >
          <FaChevronRight />
        </AddButton>
      </div>
    );
  };
  return (
    <section className={classes.reviews}>
      <Container>
        <div className={classes.header}>
          <Header>what says our customers</Header>
        </div>
        <Carousel
          responsive={responsive}
          arrows={false}
          customButtonGroup={<CustomButtonGroup />}
          renderButtonGroupOutside
          infinite
          autoPlay
          additionalTransfrom={0}
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container"
          draggable
          focusOnSelect={false}
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderDotsOutside={false}
        >
          {reviews.map((item) => {
            return <ReviewItem item={item} key={item.id} />;
          })}
        </Carousel>
      </Container>
    </section>
  );
};

export default Reviews;
