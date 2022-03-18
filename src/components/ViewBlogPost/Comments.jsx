import { Typography, Box, Container } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Comments = (props) => {
    
    // console.log(props.postId)

    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchComments = async () => {
            await axios.get(`https://jsonplaceholder.typicode.com/posts/${props.postId}/comments`)
            .then(res => setComments(res.data)).catch(err => console.log(err))
        }
        fetchComments()
    },[])

  return (
      <Container sx={{
          marginTop: '2.5em',
      }}>
        <Typography variant='h5'
        sx={{
            paddingBottom: '1em',
        }}>Comments</Typography>
        <Box sx={{display: "flex",
            flexDirection: "column",
            gap: "1rem"}}>
        {
            comments.map((comment, i) => {
                return(
                <Box key={i}
                sx={{
                    backgroundColor: "#f2f2f2",
                    border: "1px solid transparent",
                    borderRadius: "10px",
                    padding: "1rem",
                }}>
                <span><i>{comment.email} says...</i></span>
                <p><b>{comment.name}</b></p>
                <p>{comment.body}</p>
                </Box>    
            )
            })
        }
    </Box>
    </Container>
  )
}

export default Comments