import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
const PHOTOS = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const ListOfPhotoCards = () => {
  const { id } = useParams()
  const { data } = useQuery(PHOTOS)

  const filtrados = id
    ? data?.photos.filter((photo) => photo.categoryId == id)
    : data?.photos
  return (
    <ul>
      {filtrados?.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
