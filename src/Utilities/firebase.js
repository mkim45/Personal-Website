import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKHSILuDV2kXEB9ZtlIxYK-9WoYhPEQLI",
    authDomain: "battery-extern-tool.firebaseapp.com",
    projectId: "battery-extern-tool",
    storageBucket: "battery-extern-tool.appspot.com",
    messagingSenderId: "125032685008",
    appId: "1:125032685008:web:47c621a372bb85885cedd5"
  };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
