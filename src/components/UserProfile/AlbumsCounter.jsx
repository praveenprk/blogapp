import { Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const AlbumsCounter = () => {

    const [count, setCount] = useState(0)

    const getAlbumsCount = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/albums`)
        .then(res => {setCount(res.data.length)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
      getAlbumsCount()
    }, [])

    console.log(count)

  return (
    <Stack className='counter-sq' sx={{
        backgroundColor: 'white',
        border: '0px solid white',
        borderRadius: '10px',
        width: '20%',
        height: '100px',
    }}>
    <Typography variant='h4' sx={{
        margin: 'auto'
    }}>
        {count}
    </Typography>
    <Typography variant='h6' sx={{
        textAlign: 'center',
        margin: 'auto',

    }}>
        Albums
    </Typography>
    </Stack>
  )
}

export default AlbumsCounter