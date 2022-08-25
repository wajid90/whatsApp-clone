import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCT_P7hb4mfZEUy7lt0Z96GwpHltPRHJC0",
  authDomain: "whatsup-clone-fc5c8.firebaseapp.com",
  projectId: "whatsup-clone-fc5c8",
  storageBucket: "whatsup-clone-fc5c8.appspot.com",
  messagingSenderId: "376934270108",
  appId: "1:376934270108:web:ad47b0e539c55e741b1959",
  measurementId: "G-ZKBPFZ5XNJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);