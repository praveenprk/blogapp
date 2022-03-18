import { Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Skeleton from '@mui/material/Skeleton';
import './BlogPostsSummary.css'

const BlogPostsSummary = () => {

    const [blogPosts, setBlogPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchPosts = async () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setBlogPosts(res.data))
        .catch(err => console.log(err))
    }
    fetchPosts()
},[])

setTimeout(() => {
    setLoading(false)
}, 2000)

    return  (
        <>
        <Typography variant='h1'>Blog</Typography>
        <Grid container spacing="4" sx={{
            textAlign: "center",
            justifyContent: "center",
            padding: '1rem',
            gap: "2rem"
        }}>
            {
            blogPosts && blogPosts.map(blogPost => {
                return (
                    loading ? (
                    <Skeleton md={6} sm={6} xs={12} lg={3} key={blogPost.id} variant="rectangular" width={300}
                    height={400}/>
                    )
                    : (<Grid className="post-card" item key={blogPost.id} md={6} sm={6} xs={12} lg={4}>
                        <h3>
                            <Link to={`/posts/${blogPost.id}`}>
                                {blogPost.title.toUpperCase()}
                            </Link>
                        </h3>
                        <p className='post-body'>
                            {blogPost.body}
                        </p>
                        <Link to={`/blog/${blogPost.id}`}><span>Read More...</span></Link>
                    </Grid>)
                )
        })}
        
        </Grid>
        <Outlet/>
        </>
    )
//end 
}
 

export default BlogPostsSummary