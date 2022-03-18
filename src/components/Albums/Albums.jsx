import { Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from '@mui/material/Skeleton';


const Albums = () => {

    const [albums, setAlbums] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getAlbums = async () => {
            await axios.get(`https://jsonplaceholder.typicode.com/albums`)
            .then(res => setAlbums(res.data))
            .catch(err => console.log(err))
        }
        getAlbums()
    },[])

    setTimeout(() => setLoading(false), 2000)

    return (
        <>
        <Typography variant='h1'>Albums</Typography>
        <Grid container sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: "1em"
        }}>
        {
            albums.map((album, i)=>{
                return(
                    
                    loading ? (<Skeleton md={6} sm={6} xs={12} lg={4} key={i} variant="rectangular" width={300}
                    height={200}/>) :
                    
                    (<Grid item xs={12} sm={6} lg={3} md={6} key={i} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#f2f2f2',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: "1px solid transparent",
                        borderRadius: "10px",
                        // maxWidth: "350px!important",
                        height: "100px",
                        lineHeight: "2em"
                    }}>
                        <Link to={`/viewAlbum/${album.id}`}>{album.title}</Link>
                        <Link to={`${album.userId}`}>View Owner</Link>
                    </Grid>)
                )
            })
        }
    </Grid>
    </>
  )
}

export default Albums