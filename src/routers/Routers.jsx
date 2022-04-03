import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App"
import React from 'react'
import BlogPostsSummary from "../components/BlogPostsCard/BlogPostsSummary";
import ViewBlogPost from "../components/ViewBlogPost/ViewBlogPost";
import Header from "../partials/Header";
import Albums from "../components/Albums/Albums";
import ViewAlbum from "../components/ViewAlbum/ViewAlbum";
import Users from "../components/Users/Users";
import UserProfile from "../components/UserProfile/UserProfile";
import AddPostFloat from "../elements/AddPostFloat";


const Routers = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route index path="/" element={<App/>}/>
            <Route path="blog" element={<BlogPostsSummary/>}/>
            <Route path="/posts/:id" element={<ViewBlogPost/>}/>
            
            <Route path="/albums" element={<Albums/>}/>
            
            <Route path="/viewAlbum/:id" element={<ViewAlbum/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/users/:id" element={<UserProfile/>}/>
        </Routes>
        <AddPostFloat/>
    </BrowserRouter>
  )
}

export default Routers
