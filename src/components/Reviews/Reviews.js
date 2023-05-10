import "./Reviews.css";
import Container from "../UI/Container";
import Header from "../UI/Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewItem from "./ReviewItem";
import AddButton from "../UI/AddButton";
import client1 from "../../images/client1.webp";
import client2 from "../../images/client2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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
const reviews = [
  {
    id: "c1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    customerName: "Moana Michell",
    title: "magna aliqua",
    imageURL: client1,
  },
  {
    id: "c2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    customerName: "Mike Hamell",
    title: "magna aliqua",
    imageURL: client2,
  },
  {
    id: "c3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    customerName: "Moana Michell",
    title: "magna aliqua",
    imageURL: client1,
  },
  {
    id: "c4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    customerName: "Mike Hamell",
    title: "magna aliqua",
    imageURL: client2,
  },
];

const Reviews = () => {
  const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="slider-buttons">
        <AddButton
          className="left-button"
          aria-label="add"
          onClick={() => previous()}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </AddButton>
        <AddButton
          className="right-button"
          aria-label="add"
          onClick={() => goToSlide(currentSlide + 1)}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </AddButton>
      </div>
    );
  };
  return (
    <section id="Reviews">
      <Container>
        <div className="reviews-header">
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
