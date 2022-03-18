import React from 'react'
import { Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
      <nav>
            <Box display="flex" justifyContent="space-around" alignItems="center" sx={{
                padding: '1.5rem',
                backgroundColor: '#fafafa',
            }}>
                
                <Link to='/'><HomeIcon/></Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/albums'>Albums</Link>
                <Link to='/todos'>Todos</Link>
                <Link to='/users'>Users</Link>
                <Link to='my-account'><AccountCircleIcon /></Link>
            </Box>

      </nav>
  )
}

export default Header