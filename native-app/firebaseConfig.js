import { initializeApp } from "firebase/app";
// import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDNVRctSxubxWdBbQNKJn_HVXiPMUK4MxY",
  authDomain: "grand-drive-357008.firebaseapp.com",
  projectId: "grand-drive-357008",
  storageBucket: "grand-drive-357008.appspot.com",
  messagingSenderId: "15976259242",
  appId: "1:15976259242:web:f1795356232314c67c3ad3",
};
export const app = initializeApp(firebaseConfig);

// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
