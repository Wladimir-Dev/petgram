import React, { useContext } from 'react'
import { PetContext } from '../../Context/Context'
import { RegisterMutation } from '../../components/container/RegisterMutation'
import { LoginMutation } from '../../components/container/LoginMutation'

export const NoRegisterUser = () => {
  const { setIsAuth } = useContext(PetContext)

  return (
    <>
      <RegisterMutation activar={setIsAuth} />
      <LoginMutation activar={setIsAuth} />
      {/* <UserForm onSubmit={setIsAuth} title='Iniciar Sesion' /> */}
    </>
  )
}
