import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './Styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import Logo from './components/Logo'
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}
