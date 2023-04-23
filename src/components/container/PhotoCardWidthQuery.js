import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { gql, useQuery } from '@apollo/client'

const singlePhoto = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const PhotoCardWidthQuery = ({ id }) => {
  const { loading, data } = useQuery(singlePhoto, { variables: { id: id } })

  return loading ? <h5>cargando</h5> : <PhotoCard {...data?.photo} />
}
