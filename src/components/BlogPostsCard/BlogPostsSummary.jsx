import { Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Skeleton from '@mui/material/Skeleton';
import './BlogPostsSummary.css'
import { useDispatch } from 'react-redux';
import { getBlogs } from '../../features/blogs/blogs';

const BlogPostsSummary = () => {

    const [blogPosts, setBlogPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(()=>{
        const fetchPosts = async () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setBlogPosts(res.data)
            dispatch(getBlogs(res.data))
        })
        .catch(err => console.log(err))
    }
    fetchPosts()
    document.title = 'All Blog Posts'
    
    //perform cleanup
    return() => {
        setBlogPosts(null)
        setLoading(null)
    }
    
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
            blogPosts && blogPosts.map((blogPost,i) => {
                return (
                    loading ? (
                    <Skeleton md={6} sm={6} xs={12} lg={4} key={i} variant="rectangular" width={300}
                    height={400}/>
                    )
                    : (<Grid className="post-card" item key={i} md={6} sm={6} xs={12} lg={4}>
                        <h3>
                            <Link to={`/posts/${blogPost.id}`}>
                                {blogPost.title.toUpperCase()} 
                            </Link>
                        </h3>
                        <img width={250} height={150} src="https://bryantparkpt.com/wp-content/uploads/2020/07/blog-img-1200x802.jpg" alt="blog-dummy" />
                        <p className='post-body'>
                            {blogPost.body}
                        </p>
                        <Link to={`/posts/${blogPost.id}`}><span>Read More...</span></Link>
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