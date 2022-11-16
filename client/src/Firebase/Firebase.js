import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4qLcFguuuUbst35krgwqf7nOaGzlkVoA",
  authDomain: "car-dealership-3a4b3.firebaseapp.com",
  projectId: "car-dealership-3a4b3",
  storageBucket: "car-dealership-3a4b3.appspot.com",
  messagingSenderId: "245861089003",
  appId: "1:245861089003:web:6325d83801ae28776208ae",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
