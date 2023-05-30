import Offers from "../Offers/Offers";
import Menu from "../Menu/Menu";
import About from "../About/About";
import BookTable from "../BookTable/BookTable";
import Reviews from "../Reviews/Reviews";

const HomePage = () => {
  return (
    <>
      <Offers />
      <Menu />
      <About />
      <BookTable />
      <Reviews />
    </>
  );
};

export default HomePage;
