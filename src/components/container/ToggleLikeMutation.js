import { gql, useMutation } from '@apollo/client'
import React from 'react'
import { FavButton } from '../FavButton'

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
export const ToggleLikeMutation = ({ id, liked, likes }) => {
  const [likeAnonymousPhoto] = useMutation(LIKE_PHOTO)

  const handleFavClick = () => {
    likeAnonymousPhoto({ variables: { input: { id } } })
  }
  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
}
