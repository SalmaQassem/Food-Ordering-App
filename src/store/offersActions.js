import { offersActions } from "./offersSlice";

export const fetchOffersData = () => {
  return async (dispatch) => {
    const getDate = async () => {
      const response = await fetch(
        "https://feane-751cb-default-rtdb.firebaseio.com/Offers.json"
      );
      if (!response.ok) {
        throw new Error("Fetching Offers Data Failed!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const offersData = await getDate();
      const loadedData = [];
      for (const key in offersData) {
        loadedData.push({
          id: offersData[key].id,
          title: offersData[key].title,
          percentage: offersData[key].percentage,
          imageUrl: offersData[key].imageUrl,
        });
      }
      dispatch(offersActions.setOffersData(loadedData));
    } catch (error) {
      console.log(error.message);
    }
  };
};
