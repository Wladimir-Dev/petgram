import { gql, useMutation } from '@apollo/client'
import React from 'react'
import { FavButton } from '../FavButton'

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
export const ToggleLikeMutation = ({ id, liked, likes, setLiked }) => {
  const [likeAnonymousPhoto] = useMutation(LIKE_PHOTO)

  const handleFavClick = () => {
    !liked && likeAnonymousPhoto({ variables: { input: { id } } })
    setLiked(!liked)
  }
  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
}
