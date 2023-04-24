import React from 'react'
import { RegisterMutation } from '../../components/container/RegisterMutation'
import { LoginMutation } from '../../components/container/LoginMutation'

export const NoRegisterUser = () => {
  return (
    <>
      <RegisterMutation />
      <LoginMutation />
    </>
  )
}
