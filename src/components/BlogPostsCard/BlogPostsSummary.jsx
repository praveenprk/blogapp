import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './BlogPostsSummary.css'

const BlogPostsSummary = () => {

    const [blogPosts, setBlogPosts] = useState([])

    useEffect(()=>{
        const fetchPosts = async () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setBlogPosts(res.data)
        })
    }
    fetchPosts()
}, [])

    return  (
        <>
        <h1>All Blog Posts</h1>
        <Grid container spacing="2" sx={{
            textAlign: "center",
            justifyContent: "center",
            padding: '1rem',
            gap: "2rem"
        }}>
            {
            blogPosts.map(blogPost => {
            return (
                    <Grid className="post-card" item key={blogPost.id} md={6} sm={6} xs={12} lg={4}>
                        <h3>
                            <Link to={`/posts/${blogPost.id}`}>
                                {blogPost.title.toUpperCase()}
                            </Link>
                        </h3>
                        <p className='post-body'>
                            {blogPost.body}
                        </p>
                        <Link to={`/blog/${blogPost.id}`}><span>Read More...</span></Link>
                    </Grid>
                )
        })}
        
        </Grid>
        <Outlet/>
        </>
    )
//end 
}
 

export default BlogPostsSummary