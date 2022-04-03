import { Container, Divider } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
// import {getUserId}  from '../../functions/getUserId'
import Comments from './Comments'
import './ViewBlogPost.css'

const ViewBlogPost = () => {
    
    const { id } = useParams()
    
    const [blogPost, setBlogPost] = useState()
    const [name, setname] = useState('')


   const getAuthorName = (id) =>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setname(res.data.name))
        .catch(err => console.log(err))

        return name
    }
    
    const fetchBlogPost = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => 
            {
                setBlogPost(res.data)
                getAuthorName(res.data.userId)
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
                    <span><i>By&nbsp;{name}</i></span>
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