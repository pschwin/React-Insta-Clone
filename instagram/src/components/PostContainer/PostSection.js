import React from 'react';
import Post from './Post';
import CommentSection from '../CommentContainer/CommentSection';


const PostSection = props => {


   return (
       <div className="post-container">
       
        {props.instaPosts.map((mappedPost, index) =>(

            <div className="post-wrapper">
            <Post arrayOfPosts = {mappedPost} key = {index} />
            <CommentSection comments={mappedPost.comments} key = {index}/>
            </div>

        ))}

        
       
       </div>
   ) 
}

export default PostSection;