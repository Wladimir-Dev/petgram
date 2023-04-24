import { gql, useMutation } from '@apollo/client'
import React, { useContext } from 'react'
import { UserForm } from '../UserForm'
import { useNavigate } from 'react-router-dom'
import { PetContext } from '../../Context/Context'
const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`
export const LoginMutation = () => {
  const { activeAuth } = useContext(PetContext)
  const navigate = useNavigate()
  const [login, { error, loading }] = useMutation(LOGIN)
  const onSubmit = ({ email, password }) => {
    login({ variables: { input: { email, password } } })
      .then(({ data }) => {
        const { login } = data
        activeAuth(login)
        navigate('/')
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
