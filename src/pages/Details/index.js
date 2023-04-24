import React from 'react'
import { PhotoCardWidthQuery } from '../../components/container/PhotoCardWidthQuery'
import { useParams } from 'react-router-dom'
import { Layaout } from '../../components/Layaout'

export const Detail = () => {
  const { detailId } = useParams()
  console.log(detailId)
  return (
    <Layaout title={`Fotografría ${detailId}`}>
      <PhotoCardWidthQuery id={detailId} />
    </Layaout>
  )
}
