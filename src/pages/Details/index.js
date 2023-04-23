import React from 'react'
import { PhotoCardWidthQuery } from '../../components/container/PhotoCardWidthQuery'
import { useParams } from 'react-router-dom'

export const Detail = () => {
  const { detailId } = useParams()
  console.log(detailId)
  return <PhotoCardWidthQuery id={detailId} />
}
