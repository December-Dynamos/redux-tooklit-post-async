import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'; 
import axios from 'axios';


const initialState = {
    loading: false, 
    posts: [], 
    error: '' 
}


//action creators: pending, fulfilled, rejected
export const fetchPosts = createAsyncThunk("post/fetchPosts" , ()=>{
     return axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        .then((response)=> response.data)
})

console.log(fetchPosts)

// action creators: 
const {pending, fulfilled, rejected} = fetchPosts


// fetchPosts.pending  
// fetchPosts.fulfilled
// fetchPosts.rejected

// "post/fetchPosts/pending"
// "post/fetchPosts/fulfilled"
// "post/fetchPosts/rejected"

const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    // reducers: {

    // },
    extraReducers: (builder) => {
         builder.addCase(pending, state => {
                state.loading = true
         })
        builder.addCase(fulfilled, (state, action) => {
                  state.loading = false
                  state.posts = action.payload
                  state.error = ''   
        })
        builder.addCase(rejected, (state, action) => {
                  state.loading = false
                  state.posts = []
                  state.error = action.payload
        })
    }
})


export default postSlice.reducer



