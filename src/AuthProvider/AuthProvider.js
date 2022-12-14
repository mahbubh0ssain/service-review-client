import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);

  const signUpUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };
  const userSignOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  const profileUpdate = (profile) => {
    return updateProfile(auth.currentUser, {
      displayName: profile.displayName,
      photoURL: profile.photoURL,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  const info = {
    user,
    loader,
    signUpUser,
    loginUser,
    googleLogIn,
    userSignOut,
    profileUpdate,
    githubLogin,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
