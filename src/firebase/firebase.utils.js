import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const config = {
  apiKey: "AIzaSyBMgDLGwnVoBcqSbwbmKGV0MF41jymvqAQ",
  authDomain: "vinoclothingdb.firebaseapp.com",
  projectId: "vinoclothingdb",
  storageBucket: "vinoclothingdb.appspot.com",
  messagingSenderId: "915597614012",
  appId: "1:915597614012:web:36c973bea6fe98fa8c29b9",
  measurementId: "G-G6BQFXGCPF",
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc('users/12ewe4434');
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const { displayName , email} = userAuth;
    const createdAt =  new Date();
    try{
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
    }catch (error) {  
      console.log('error creating user');

    }
  }
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase
