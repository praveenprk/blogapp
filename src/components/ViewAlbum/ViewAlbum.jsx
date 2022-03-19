import { Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ViewAlbum = () => {

  const { id  } = useParams()
  const [photos, setPhotos] = useState([])
  // const [loading, setLoading] = useState([])

  useEffect(() => {
    const getPhotos = async () => {
      await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then(res =>  setPhotos(res.data))
      .catch(err => console.log(err))
    }
    getPhotos()
  })

  
  return (
    <>
    <Typography variant='h1' textAlign="center">Photos</Typography>
    <Grid container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '1em',
      margin: 'auto'
    }}>
      {
        photos.map((photo, i)=>{
          return(
            <Grid key={i} item xs={12} sm={6} md={6} lg={4} sx={{paddingBottom: '1em'}}>
              <img src={`${photo.url}`} alt="" width={350} height={300} />
            </Grid>
          )
        })
      }
    </Grid>
    </>
  )
  
}

export default ViewAlbum