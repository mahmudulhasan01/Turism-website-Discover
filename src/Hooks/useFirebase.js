import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializefirebase from "../Firebase/Firebase.init";

initializefirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  // const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const registerUsingEmailPassword = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database
        // saveUser(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setAuthError(error.massege);
          });
        history.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        // setUser(result.user)
        // Signed in
        // ...
      })
      .catch((error) => {});
  };

  const singInUseingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // saveUser(user?.email, user?.displayName, "PUT");
      })
      .finally(() => setIsLoading(false));
  };

  //   Ovserve User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      isLoading(true);
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  // const saveUser = (email, displayName, method) => {
  //   const user = { email: email, displayName: displayName };
  //   console.log(user);

  //   fetch("http://localhost:5000/users", {
  //     method: method,
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   }).then();
  // };

  // useEffect(() => {
  //   fetch(`http://localhost:5000/${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAdmin(data.admin);
  //     });
  // }, [user.email]);

  const Logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
      }
    });
  }, [auth]);

  return {
    user,
    // admin,
    isLoading,
    token,
    authError,
    registerUsingEmailPassword,
    loginUser,
    singInUseingGoogle,
    Logout,
  };
};

export default useFirebase;
