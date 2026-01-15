import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace with your own Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdm_8MCAUoGYJoJE1JdNM8qiXcQJyM6iA",
  authDomain: "ele-360.firebaseapp.com",
  projectId: "ele-360",
  storageBucket: "ele-360.firebasestorage.app",
  messagingSenderId: "551044475920",
  appId: "1:551044475920:web:3be77dbca19a56c2422e95",
  measurementId: "G-JJVGLJ24JN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
