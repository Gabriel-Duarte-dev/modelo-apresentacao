import { GoogleAuthProvider, getAuth, signInWithPopup, User } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { app } from "../config/firebase";

interface FirebaseContextProps {
  signed: boolean;
  googleUser: User | null;
  isLoading: boolean;
  isError: boolean;
  googleSignIn(): void;
  googleSignOut(): void;
}

const FirebaseContext = createContext<FirebaseContextProps>({} as FirebaseContextProps);

type FirebaseProviderProps = {
  children: ReactNode;
};

const provider = new GoogleAuthProvider();

export const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  const auth = getAuth(app);
  const [googleUser, setGoogleUser] = useState<User | null>(null);

  useEffect(() => {
    const storageGoogleUser = localStorage.getItem("googleUser");

    if (storageGoogleUser) setGoogleUser(JSON.parse(storageGoogleUser));
  }, []);

  const {
    mutate: googleSignIn,
    isLoading,
    isError,
  } = useMutation(async () => signInWithPopup(auth, provider), {
    onSuccess: (data) => {
      console.log(data);
      setGoogleUser(data.user);
      localStorage.setItem("googleUser", JSON.stringify(data.user));
    },
    onError: (error) => {
      console.log("firebase error:", error);
    },
  });

  const googleSignOut = () => {
    setGoogleUser(null);
    localStorage.removeItem("googleUser");
  };

  return (
    <FirebaseContext.Provider value={{ signed: !!googleUser, googleUser, googleSignIn, isLoading, isError, googleSignOut }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export function useFirebaseAuth() {
  const firebaseContext = useContext(FirebaseContext);

  return firebaseContext;
}
