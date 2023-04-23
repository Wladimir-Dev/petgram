import { gql, useMutation } from '@apollo/client'
import React from 'react'
import { UserForm } from '../UserForm'
const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`
export const RegisterMutation = ({ activar }) => {
  const [signup, { error, loading }] = useMutation(REGISTER)
  const onSubmit = ({ email, password }) => {
    // const input = { email, password }
    signup({ variables: { input: { email, password } } })
      .then(({ data }) => {
        const { signup } = data
        activar(signup)
      })
      .catch(error)
  }

  const erroMsj = error && 'el usuario ya existe o hay algún problema'

  return (
    <UserForm
      disabled={loading}
      error={erroMsj}
      onSubmit={onSubmit}
      title='Registrar'
    />
  )
}
