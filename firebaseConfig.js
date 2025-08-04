import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHNlXVtdmX4nzkDkGoCxeuB67L0rgt5AE",
  authDomain: "fir-chat-93eec.firebaseapp.com",
  projectId: "fir-chat-93eec",
  storageBucket: "fir-chat-93eec.appspot.com", // <-- fixed here
  messagingSenderId: "59169421997",
  appId: "1:59169421997:web:20b914846ae40e11f0e424"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);

export const usersRef = collection(db, "users");
export const roomsRef = collection(db, "rooms");