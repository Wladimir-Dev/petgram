import React from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
import { ListOfPhotoCards } from '../../components/ListOfPhotoCards'
import { Helmet } from 'react-helmet'
import Logo from '../../components/Logo'

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Petgram- Tu App de Fotos de Mascotas</title>
        <meta
          name='description'
          content='con petgram puedes encntrar fotos de animales domésticos muy bonitos'
        />
      </Helmet>
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}
