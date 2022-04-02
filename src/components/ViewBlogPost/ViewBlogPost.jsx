import { Container, Divider } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Comments from './Comments'
import './ViewBlogPost.css'

const ViewBlogPost = () => {
    
    const { id } = useParams()
    
    const [blogPost, setBlogPost] = useState()
    const [title, setTitle] = useState('loading...')
    
    const fetchBlogPost = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => 
            {
                setBlogPost(res.data)
                document.title = res.data.title
            }
            )
        .catch(err => console.log(err))
        }

    useEffect(()=>{
        fetchBlogPost()
    }, [])

    return (
    <div>
        {
            blogPost && (
                <Container sx={{
                    padding: '1rem',
                    margin: "0 auto",
                    lineHeight: "2.0",
                }}>
                    <h1>{blogPost.title}</h1>
                    <p>{blogPost.body}</p>
                    <Divider/>
                    <Comments postId={id}/>
                </Container>
            )
        }
    </div>
  )
}

export default ViewBlogPost