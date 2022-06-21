import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { createContext, ReactNode, useContext, useState } from "react";
import { useMutation } from "react-query";
import { app } from "../config/firebase";

interface FirebaseContextProps {
  signed: boolean;
  googleUser: object | null;
  isLoading: boolean;
  isError: boolean;
  googleSignIn(): void;
}

const FirebaseContext = createContext<FirebaseContextProps>({} as FirebaseContextProps);

type FirebaseProviderProps = {
  children: ReactNode;
};

const provider = new GoogleAuthProvider();

export const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  const auth = getAuth(app);
  const [googleUser, setGoogleUser] = useState<object | null>(null);

  const {
    mutate: googleSignIn,
    isLoading,
    isError,
  } = useMutation(async () => signInWithPopup(auth, provider), {
    onSuccess: (data) => {
      console.log(data);
      setGoogleUser(data.user);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <FirebaseContext.Provider value={{ signed: !!googleUser, googleUser, googleSignIn, isLoading, isError }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export function useFirebaseAuth() {
  const firebaseContext = useContext(FirebaseContext);

  return firebaseContext;
}
