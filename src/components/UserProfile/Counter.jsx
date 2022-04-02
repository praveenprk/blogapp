import { Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = (props) => {


  return (
    <Stack sx={{
        backgroundColor: 'white',
        border: '0px solid white',
        borderRadius: '10px',
        width: '20%',
        height: '100px',
    }}>
    <Typography variant='h4' sx={{
        margin: 'auto'
    }}>
        50
    </Typography>
    <Typography variant='h6' sx={{
        textAlign: 'center',
        margin: 'auto',

    }}>
        {props.countFor}
    </Typography>
    </Stack>
  )
}

export default Counter