import React from 'react';
import Post from './Post';

const PostSection = props => {


   return (
       <div className="post-container">
       
        {props.instaPosts.map((mappedPost, index) =>(
            <Post arrayOfPosts = {mappedPost} key = {index} />
        ))}
       
       </div>
   ) 
}

export default PostSection;