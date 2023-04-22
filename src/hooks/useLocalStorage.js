import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState(
    JSON.parse(window.localStorage.getItem(key)) || initialValue
  )

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setLocalStorage]
}
