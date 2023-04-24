import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Subtitle, Title } from './styles'
import Logo from '../Logo'

export const Layaout = ({ children, title, subtitle }) => {
  return (
    <>
      <Logo />
      <Helmet>
        {title && <title>{title} | Petgram</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  )
}
