import {initializeApp} from "firebase/app";
import {getFirestore, initializeFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: " AIzaSyBFgd16OxP3lhZhh1Zqe5rgQFCgWVQ6OyY ",
    authDomain: " authentifierutilisateur.firebaseapp.com ",
    projectId: " authentifierutilisateur ",
    storageBucket: " authentifierutilisateur.appspot.com ",
    messagingSenderId: " 152845092185 ",
    appId: " 1:152845092185:web:103099df6b41bddf99f848 "
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;