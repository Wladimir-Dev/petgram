import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Container, Enlace, Error, Form, Input, Span, Title } from './styles'
import { SubmitButton } from '../SubmitButton'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '../Logo'

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Container>
      <Logo />
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder='email'
          type='email'
          {...email}
        />
        <Input
          disabled={disabled}
          placeholder='password'
          type='password'
          {...password}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {location.pathname === '/registrar' ? (
        <Span>
          Ya tienes una cuenta?{' '}
          <Enlace onClick={() => navigate('/login')}>Inicia Sesión</Enlace>
        </Span>
      ) : (
        <Span>
          No estas registrado?{' '}
          <Enlace onClick={() => navigate('/registrar')}>Registrate</Enlace>
        </Span>
      )}

      {error && <Error>{error}</Error>}
    </Container>
  )
}
