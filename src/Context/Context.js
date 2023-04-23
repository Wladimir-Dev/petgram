import React, { createContext, useState } from 'react'

export const PetContext = createContext()
export const PetProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  
  return (
    <PetContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </PetContext.Provider>
  )
}
