import React, { createContext, useState } from 'react'

export const PetContext = createContext()
export const PetProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })
  const activeAuth = (token) => {
    setIsAuth(true)
    window.sessionStorage.setItem('token', token)
  }
  const removeAuth = () => {
    setIsAuth(false)
    window.sessionStorage.removeItem('token')
  }
  return (
    <PetContext.Provider value={{ isAuth, activeAuth, removeAuth }}>
      {children}
    </PetContext.Provider>
  )
}
