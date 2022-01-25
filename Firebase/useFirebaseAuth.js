import { useState, useEffect } from "react";
import { auth, db } from "./auth";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";

const formatAuthUser = (user, { nome = "", municipio = "", tipo = "" }) => ({
  uid: user.uid,
  email: user.email,
  nome: nome,
  displayNome: nome.replace(/ .*/, ""),
  municipio: municipio,
  tipo: tipo,
});

export default function useFirebaseAuth() {
  const router = useRouter();

  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const docRef = doc(db, "users", authState.uid);
    const docSnap = await getDoc(docRef);
    let formattedUser = formatAuthUser(authState, docSnap?.data());
    setAuthUser(formattedUser);
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authState) =>
      authStateChanged(authState)
    );
    return () => unsubscribe();
  }, []);

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const logout = () => {
    signOut(auth);
    router.push("/");
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert(`Enviado email para ${email} para redefinição de senha`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return {
    authUser,
    loading,
    login,
    logout,
    resetPassword,
  };
}
