import {initializeApp} from "firebase/app"
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// import {getDatabase} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBSbDEsa-jTCHP6u7EtOQDhH90oA78L2E8",
    authDomain: "mercato-store.firebaseapp.com",
    projectId: "mercato-store",
    storageBucket: "mercato-store.appspot.com",
    messagingSenderId: "511794241161",
    appId: "1:511794241161:web:7467380aca4765fd04b058"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
// const database = getDatabase(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export {auth, googleProvider};