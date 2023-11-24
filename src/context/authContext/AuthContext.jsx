import { auth } from "../../firebase"
import React, { useContext, useState, useEffect } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { RolesTypes } from "../../utils/RolesTypes"

export const AuthContext = React.createContext()

export function useAuth() {
  const auth = useContext(AuthContext)
  if (auth == undefined) {
    throw new Error("No puedes acceder desde aqui al context auth")
  } else return auth
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [rol, setRol] = useState(window.localStorage.getItem("myRol") ? window.localStorage.getItem("myRol") : RolesTypes.CLIENTE)
  const [loading, setLoading] = useState(true)
  const [userBBDD, setUserBBDD] = useState(window.localStorage.getItem("myUser"))
  function signup(userBD, email, password) {
    setUserBBDD(userBD)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  async function login(userBD, email, password) {
    setUserBBDD(userBD)
    window.localStorage.setItem("myUser", JSON.stringify(userBD))
    window.localStorage.setItem("myRol", rol)
    const user = await signInWithEmailAndPassword(auth, email, password).then(elemento => elemento.json)
    return user
  }

  async function logout() {
    window.localStorage.setItem("myUser", null)
    window.localStorage.setItem("myRol", null)
    return await signOut(auth)
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser, rol, setRol,
    userBBDD,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}