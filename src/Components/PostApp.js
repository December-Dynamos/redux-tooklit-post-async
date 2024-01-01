import React , {useEffect} from "react";  
import { fetchPosts } from "../redux/features/post/postSlice";

import {useDispatch, useSelector} from 'react-redux';



const PostApp = () => {
    const {loading, posts, error} = useSelector((state)=>state.post )

    const dispatch = useDispatch();


    useEffect(()=>{
         dispatch(fetchPosts())
    },[dispatch])


    return(
        <div>
            <h1> Post App</h1> 
            {
                posts.map(post => (
                    <div key={post.id}
                      style={{
                            border: "1px solid black",
                            padding: "10px",
                            margin: "10px"
                        
                      }}
                    >
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default PostApp;