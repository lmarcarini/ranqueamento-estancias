import { useState, useEffect } from "react";
import { auth, db } from "./auth";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
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

  const [curUser, setCurUser] = useState(null);
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
    setCurUser(authState);
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

  const changePassword = (currentPassword, newPassword) => {
    const credential = EmailAuthProvider.credential(
      authUser.email,
      currentPassword
    );
    console.log(currentPassword);
    reauthenticateWithCredential(curUser, credential)
      .then(() => {
        updatePassword(curUser, newPassword)
          .then(() => {
            alert("Senha alterada.");
          })
          .catch((error) => {
            alert("Ocorreu algum problema.");
            console.log(error);
          });
      })
      .catch((error) => {
        alert("Não foi possível conferir sua senha");
        console.log(error);
      });
  };

  return {
    authUser,
    loading,
    login,
    logout,
    resetPassword,
    changePassword,
  };
}
