import React, { useContext } from 'react'
import { PetContext } from '../../Context/Context'
import { RegisterMutation } from '../../components/container/RegisterMutation'
import { LoginMutation } from '../../components/container/LoginMutation'

export const NoRegisterUser = () => {
  const { activador } = useContext(PetContext)

  return (
    <>
      <RegisterMutation activar={activador} />
      <LoginMutation activar={activador} />
    </>
  )
}
