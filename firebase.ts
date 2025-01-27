// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCPbmWm9NvVmYEu3PVurUn734HtBSsy6A",
  authDomain: "our-story-new.firebaseapp.com",
  projectId: "our-story-new",
  storageBucket: "our-story-new.firebasestorage.app",
  messagingSenderId: "555010221803",
  appId: "1:555010221803:web:28b247f5dd9f20adc800ae",
  measurementId: "G-T5X53QN139"
};
// Initialize Firebase

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
// const analytics = getAnalytics(app);
export { db };
