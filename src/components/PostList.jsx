import React, { useState } from 'react'
import PostItem from '../components/PostItem';
import '../styles/App.css';

function PostList({posts, title}) {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map(post => 
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    )
}

export default PostList