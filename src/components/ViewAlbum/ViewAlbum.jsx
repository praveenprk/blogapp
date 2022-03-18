import React from 'react'
import { useParams } from 'react-router'

const ViewAlbum = () => {

  const {id} = useParams()
  
  console.log(id)

  return (
    <div>View Album</div>
  )
}

export default ViewAlbum