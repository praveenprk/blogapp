import { configureStore } from "@reduxjs/toolkit"
import  blogSlice from "../features/blogs/blogs"
import userSlice  from "../features/users/users"

//creating store; this is like a box/container
//that stores all your state and reducer()s
//hence the name store

export const store = configureStore({
    reducer: {
        users: userSlice,
        blogs: blogSlice,
    }
})