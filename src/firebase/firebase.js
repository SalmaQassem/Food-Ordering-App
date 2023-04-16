import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJvhwPxj4N_YJX5gJ3wKfLN0NM9Bsy8p4",
  authDomain: "feane-751cb.firebaseapp.com",
  projectId: "feane-751cb",
  storageBucket: "feane-751cb.appspot.com",
  messagingSenderId: "775772325383",
  appId: "1:775772325383:web:90b27d450b166701734ca2",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
