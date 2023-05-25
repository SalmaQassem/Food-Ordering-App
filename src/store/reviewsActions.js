import { reviewsActions } from "./reviewsSlice";

export const fetchReviewsData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch(
        "https://feane-751cb-default-rtdb.firebaseio.com/Reviews.json"
      );
      if (!response.ok) {
        throw new Error("Fetching reviews Failed!");
      }
      const data = response.json();
      return data;
    };

    try {
      const reviewsData = await getData();
      const loadedReviews = [];
      for (const key in reviewsData) {
        loadedReviews.push({
          id: reviewsData[key].id,
          name: reviewsData[key].name,
          text: reviewsData[key].text,
          imageUrl: reviewsData[key].imageUrl,
          title: reviewsData[key].title,
        });
      }
      dispatch(reviewsActions.setReviewsData(loadedReviews));
    } catch (error) {
      console.log(error.message);
    }
  };
};
