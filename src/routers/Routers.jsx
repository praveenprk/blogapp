import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App"
import React from 'react'
import BlogPostsSummary from "../components/BlogPostsCard/BlogPostsSummary";
import ViewBlogPost from "../components/ViewBlogPost/ViewBlogPost";
import Header from "../partials/Header";


const Routers = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<App/>}>
              <Route path="blog" element={<BlogPostsSummary/>}/>
            </Route>
            <Route path="/posts/:id" element={<ViewBlogPost/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers
