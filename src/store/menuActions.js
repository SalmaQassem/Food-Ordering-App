import { menuActions } from "./menuSlice";
import { storage } from "../firebase/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const fetchMenuData = () => {
  return async (dispatch) => {
    const fetchImages = async () => {
      const storageRef = ref(storage, "images/menuImages/");
      const result = await listAll(storageRef);
      let urlPromises = result.items.map((imageRef) =>
        getDownloadURL(imageRef)
      );
      return Promise.all(urlPromises);
    };

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

    let urlsList = {};
    try {
      const urls = await fetchImages();
      for (let i = 0; i < urls.length; i++) {
        urlsList[`m${i + 1}`] = urls[i];
      }
    } catch (error) {
      console.log(error.message);
    }

    try {
      const menuData = await getDate();
      const loadedMenu = [];
      for (const key in menuData) {
        loadedMenu.push({
          id: menuData[key].id,
          imageUrl: urlsList[key],
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
