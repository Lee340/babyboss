import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Initialize auth providers
const provider = new GoogleAuthProvider();
const auth = getAuth();

export function loginWithGoogle(setUser) {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user;
      setUser(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error({ errorCode, errorMessage, email, credential });
    });
}
