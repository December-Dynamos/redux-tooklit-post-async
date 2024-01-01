import {createSlice} from '@reduxjs/toolkit'; 
import axios from 'axios';



const initialState = {
    loading: false, // when api starts make loading true else false
    posts: [], // if api success then store data in posts array
    error: ''  // if api fails then store error in error variable
}

const postSlice = createSlice({
    name: 'post', 
    initialState: initialState,
    reducers: {
        fetchPostRequest: (state) => {
            state.loading = true
        },
        fetchPostSuccess: (state, action) => {
        //   return {...state, loading: false, posts: action.payload, error: ''}
          state.loading = false 
          state.posts = action.payload
          state.error = ''
        },
        fetchPostFailure: (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.payload
        }
        
    }, 
}) 

// create reducer and action creators for u

// action creators
const {fetchPostRequest, fetchPostSuccess, fetchPostFailure} = postSlice.actions


export function fetchPosts(){
    return async (dispatch)=>{
         dispatch(fetchPostRequest()) 
         try{
            const response = await axios.get('https://gauravgitacc.github.io/postAppData/posts.json')
            const posts = response.data
            dispatch(fetchPostSuccess(posts))
         }
        catch(error){
            dispatch(fetchPostFailure(error.message))
        }
    }
}

export default postSlice.reducer



