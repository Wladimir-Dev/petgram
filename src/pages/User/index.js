import React, { useContext } from 'react'
import { PetContext } from '../../Context/Context'
import { SubmitButton } from '../../components/SubmitButton'
import Logo from '../../components/Logo'

export const User = () => {
  const { removeAuth } = useContext(PetContext)
  return (
    <>
      <Logo />
      <h5>User</h5>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}
