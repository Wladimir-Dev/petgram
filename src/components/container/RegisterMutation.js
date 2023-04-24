import { gql, useMutation } from '@apollo/client'
import React, { useContext } from 'react'
import { UserForm } from '../UserForm'
import { useNavigate } from 'react-router-dom'
import { PetContext } from '../../Context/Context'
const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`
export const RegisterMutation = () => {
  const { activeAuth } = useContext(PetContext)
  const navigate = useNavigate()
  const [signup, { error, loading }] = useMutation(REGISTER)
  const onSubmit = ({ email, password }) => {
    signup({ variables: { input: { email, password } } })
      .then(({ data }) => {
        const { signup } = data
        activeAuth(signup)
        navigate('/')
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
