import { gql, useMutation } from '@apollo/client'
import React from 'react'
import { UserForm } from '../UserForm'
const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`
export const LoginMutation = ({ activar }) => {
  const [login, { error, loading }] = useMutation(LOGIN)
  const onSubmit = ({ email, password }) => {
    login({ variables: { input: { email, password } } })
      .then(({ data }) => {
        const { login } = data
        activar(login)
      })
      .catch(error)
  }
  const erroMsj = error && 'Usuario o contraseña invalida'

  return (
    <UserForm
      disabled={loading}
      error={erroMsj}
      onSubmit={onSubmit}
      title='Iniciar Sesion'
    />
  )
}