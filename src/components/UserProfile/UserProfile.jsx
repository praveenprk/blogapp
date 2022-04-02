import { Avatar, Button, Grid, Stack, Typography } from '@mui/material'
// import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from "react-redux"
import DetailsAccordion from './DetailsAccordion'
import './UserProfile.css'
import { getUsers } from '../../features/users/users'
import BlogCounter from './BlogCounter'
import CommentsCounter from './CommentsCounter'
import AlbumsCounter from './AlbumsCounter'

const UserProfile = () => {
    
    const { id } = useParams()

    const dispatch = useDispatch()

    const [user, setUser] = useState({})

    const getUserData = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
         .then(res => 
            {
                document.title = res.data.name
                setUser(res.data)
                dispatch(getUsers(res.data))
            }
            )
        }

    useEffect(()=>{
        getUserData()
    },[])


    return (

<div className='user-profile-card'>
<Grid container spacing={1} sx={{
    justifyContent: "center",
    alignItems: 'center',
    paddingTop: '2.5em'
}}>

  <Grid className='user-basic-1' item xs={12} lg={4}>
  
  <Stack spacing={1} sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
  }}>
    <Avatar
        alt={`${user.name}`}
        src="https://mui.com/static/images/avatar/1.jpg"
        sx={{ width: 75, height: 75, textAlign: 'center' }}
        />
    <Typography variant='h6' sx={{
        fontWeight: '600'
    }}>{user.name}</Typography>
    <Typography variant='p' sx={{
        color:' gray',
        fontWeight: '500'
    }}>Blogger</Typography>
    <Typography variant='p' sx={{
        color:' gray',
        fontWeight: '500'
    }}>{user.username}</Typography>
    <Stack spacing={2} direction="row">
        <Button variant="contained">Follow</Button>
        <Button variant="outlined">Message</Button>
    </Stack>
</Stack>
        
  </Grid>

  <Grid container item xs={12} lg={8} sm={6} md={6}>
      <DetailsAccordion/>
  </Grid>


  <Grid item xs={12} lg={12} sm={12} md={12}>
      <Typography sx={{ textAlign: 'center', fontWeight: 'light' }} variant='h3'>Contributions</Typography>
  <Stack
      className='count-stack'
      direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}>
        <BlogCounter/>
        <CommentsCounter/>
        <AlbumsCounter/>
    </Stack>
  </Grid>

  <Grid item xs={12} lg={4} sm={6} md={6}>
  </Grid>

</Grid>
</div>
  )
}

export default UserProfile