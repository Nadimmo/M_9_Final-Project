// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1lyyMuu2oJdu_RzizFlPibBgl8xguChQ",
  authDomain: "bistro-boss-7cebf.firebaseapp.com",
  projectId: "bistro-boss-7cebf",
  storageBucket: "bistro-boss-7cebf.appspot.com",
  messagingSenderId: "697008432055",
  appId: "1:697008432055:web:b76f0baac6167f9d14fe32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app