import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDbsjClBonrYoBLtwILY3SWHoqldOd_Cxw",
  authDomain: "multi-warehouse-app.firebaseapp.com",
  projectId: "multi-warehouse-app",
  storageBucket: "multi-warehouse-app.appspot.com",
  messagingSenderId: "949864193998",
  appId: "1:949864193998:web:d9c632d468385df4bfd59f",
};

const app = firebase.initializeApp(firebaseConfig);
export const firebaseAuthentication = app.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export default app;
