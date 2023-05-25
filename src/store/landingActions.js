import { landingActions } from "./landingSlice";

export const fetchLandingData = () => {
  return async (dispatch) => {
    const getDate = async () => {
      const response = await fetch(
        "https://feane-751cb-default-rtdb.firebaseio.com/Landing.json"
      );
      if (!response.ok) {
        throw new Error("Fetching Landing Data Failed!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const landingData = await getDate();
      const loadedData = [];
      for (const key in landingData) {
        loadedData.push({
          id: landingData[key].id,
          title: landingData[key].title,
          description: landingData[key].description,
        });
      }
      dispatch(landingActions.setLandingData(loadedData));
    } catch (error) {
      console.log(error.message);
    }
  };
};
