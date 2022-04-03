import { Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Counter = () => {
    
    const [count, setCount] = useState(0)

    const getBlogCount = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {setCount(res.data.length)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
      getBlogCount()
    }, [])

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
        Blog
    </Typography>
    </Stack>
  )
}

export default Counter