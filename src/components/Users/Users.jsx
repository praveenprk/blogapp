import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Avatar from '@mui/material/Avatar';
import LanguageIcon from '@mui/icons-material/Language';
import {Grid} from '@mui/material/'
import { pink, blue, red } from '@mui/material/colors'
import './Users.css'
import { Link } from 'react-router-dom';

const Users = () => {
  
const [users, setUsers] = useState([])

const fetchUsers = async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }


useEffect(() => {
  fetchUsers()
}, [])
  
return (
    <>
    <Typography variant='h1'>Users</Typography>
    <Grid container sx={{
        justifyContent: "center",
        alignItems: "center",
        gap: "2em",
        padding: '2em',
    }}>
    {
        users.map((user, i) => {
            return(
                <Grid item xs={12} sm={6} lg={3} md={4} key={i} sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f2f2f2',
                    border: "1px solid transparent",
                    borderRadius: "10px",
                    height: "150px",
                    filter: "drop-shadow(2px 4px 6px black)"
                }}>
                    <div className='user-card'>
                    <div className='user-basic'>
                        <Avatar
                        className='avatar'
                        alt="Remy Sharp"
                        src="https://mui.com/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                        />
                        <Link to={`/users/${user.id}`}>
                            <Typography variant='h6'>{user.name}</Typography>
                        </Link>
                    </div>
                    <div className='user-cta'>
                    <IconButton aria-label="email">
                        <a href={`mailto:${user.email}`}>
                            <EmailIcon sx={{ color: pink[500] }}/>
                        </a> 
                    </IconButton>
                    <IconButton aria-label="phone">
                        <a href={`tel:${user.phone}`}>
                            <LocalPhoneIcon sx={{ color: red[300] }}/>
                        </a>
                    </IconButton>
                    <IconButton aria-label="website">
                    <a href={`https://${user.website}`}>
                        <LanguageIcon sx={{ color: blue[500] }}/>
                    </a>
                    </IconButton>
                    </div>
                    </div>
                </Grid>
            )
        })
    }
    </Grid>
    </>
)

}

export default Users