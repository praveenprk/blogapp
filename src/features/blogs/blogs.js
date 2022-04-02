import { createSlice } from "@reduxjs/toolkit";

export const blogSlice =  createSlice({
    name: "blogs",
    initialState: {
        blogs: [],
    },
    reducers: {
        getBlogs: (state, action) => {
            state.blogs.push(action.payload);
        }
    }
})

export const { getBlogs } = blogSlice.actions
export default blogSlice.reducer