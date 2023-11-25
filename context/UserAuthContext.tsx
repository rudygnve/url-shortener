"use client";

import { auth, userCollectionRef } from "@/lib/firebase"; // Import your Firebase authentication configuration here
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile,
} from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

interface UserAuthContextValue {
  logOut: () => void;
  user: any; // Replace 'any' with the actual type of your user object
  signUp: (email: string, password: string) => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
  googleSignIn: () => Promise<void>;
}

export const UserAuthContext = createContext<UserAuthContextValue | any>(null);

export function UserAuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(""); // Replace 'any' with the actual type of your user object
  async function signUp(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    avatar: string | null
  ) {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        return await updateProfile(auth.currentUser!, {
          displayName: firstname + " " + lastname,
          photoURL: avatar,
        });
      })
      .then(async () => {
        try {
          const docRef = await addDoc(userCollectionRef, {
            firstname,
            lastname,
            email,
            avatar,
            urls: [
              {
                createdAt: Date.now(),
                original: "https://www.google.com",
                short: "https://qik.me/Yiunw7UO0",
              },
            ],
          });
          console.log(docRef);
        } catch (error) {
          console.log(error);
        }
      });
  }

  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserAuthContext.Provider
      value={{ user, logOut, googleSignIn, logIn, signUp }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}

export const userAuth = () => {
  return useContext(UserAuthContext);
};
