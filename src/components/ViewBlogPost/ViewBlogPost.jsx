import { Container, Divider } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
// import {getUserId}  from '../../functions/getUserId'
import Comments from './Comments'
import './ViewBlogPost.css'

const ViewBlogPost = () => {
    
    const { id } = useParams()
    
    const [blogPost, setBlogPost] = useState()
    const [name, setname] = useState('')

    const blog = useSelector(state => state.blogs.blogs)
    console.log(blog)

   const getAuthorName = (id) =>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setname(res.data.name))
        .catch(err => console.log(err))

        return name
    }
    
    /* const fetchBlogPost = async () => {
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
    }, []) */

    return (
    null
  )
}

export default ViewBlogPost