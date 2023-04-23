import React, { createContext, useState } from 'react'

export const PetContext = createContext()
export const PetProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })
  const activador = (token) => {
    setIsAuth(true)
    window.sessionStorage.setItem('token', token)
  }
  return (
    <PetContext.Provider value={{ isAuth, activador }}>
      {children}
    </PetContext.Provider>
  )
}
