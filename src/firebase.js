import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyChWdwrVYbpwPLx7LfC5ctqgiuKZ7-dW6o",
	authDomain: "productivity-97645.firebaseapp.com",
	projectId: "productivity-97645",
	storageBucket: "productivity-97645.appspot.com",
	messagingSenderId: "1096903000436",
	appId: "1:1096903000436:web:e39d684c0e08a73024ac21"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };