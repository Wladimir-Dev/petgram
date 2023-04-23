import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { ListOfFavs } from '../ListOfFavs'
const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`
export const GetFavorites = () => {
  const { loading, error, data } = useQuery(GET_FAVS, { fetchPolicy: 'network-only' })
  if (loading) return <p>cargando...</p>
  if (error) return <p>Error!</p>
  const { favs } = data

  return <ListOfFavs favs={favs} />
}
