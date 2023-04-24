import React from 'react'
import { GetFavorites } from '../../components/container/GetFavorites'
import { Layaout } from '../../components/Layaout'

export const Favs = () => {
  return (
    <Layaout
      title='Tus Favoritos'
      subtitle='aqui puedes encontrar tus favoritos'
    >
      <GetFavorites />
    </Layaout>
  )
}
