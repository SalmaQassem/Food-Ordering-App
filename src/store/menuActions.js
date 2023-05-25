import { menuActions } from "./menuSlice";

export const fetchMenuData = () => {
  return async (dispatch) => {
    const getDate = async () => {
      const response = await fetch(
        "https://feane-751cb-default-rtdb.firebaseio.com/menuList.json"
      );
      if (!response.ok) {
        throw new Error("Fetching Menu Failed!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const menuData = await getDate();
      const loadedMenu = [];
      for (const key in menuData) {
        loadedMenu.push({
          id: menuData[key].id,
          imageUrl: menuData[key].imageUrl,
          name: menuData[key].name,
          description: menuData[key].description,
          price: menuData[key].price,
          category: menuData[key].category,
        });
      }
      dispatch(menuActions.setMenuData(loadedMenu));
    } catch (error) {
      console.log(error.message);
    }
  };
};
