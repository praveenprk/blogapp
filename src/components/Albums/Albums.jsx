import { Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Albums = () => {

    const [albums, setAlbums] = useState([])

    useEffect(()=>{
        const getAlbums = async () => {
            await axios.get(`https://jsonplaceholder.typicode.com/albums`)
            .then(res => setAlbums(res.data))
            .catch(err => console.log(err))
        }
        getAlbums()
    },[])

    console.log(albums)

    return (
        <>
        <Typography variant='h1'>Albums</Typography>
        <Grid container sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: "5px"
        }}>
        {
            albums.map((album, i)=>{
                return(
                    <Grid item xs={12} sm={6} lg={4} md={4} key={i} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#f2f2f2',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: "1px solid transparent",
                        borderRadius: "10px",
                        maxWidth: "350px!important",
                        height: "100px",
                        lineHeight: "2em"
                    }}>
                        <Link to={`/viewAlbum/${album.id}`}>{album.title}</Link>
                        <Link to={`${album.userId}`}>View Owner</Link>
                    </Grid>
                )
            })
        }
    </Grid>
    </>
  )
}

export default Albums