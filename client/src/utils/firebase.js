import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-agent-b162b.firebaseapp.com",
  projectId: "ai-interview-agent-b162b",
  storageBucket: "ai-interview-agent-b162b.firebasestorage.app",
  messagingSenderId: "880413350033",
  appId: "1:880413350033:web:06f3852b70a33536590730"
};

console.log(import.meta.env.VITE_FIREBASE_APIKEY);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };