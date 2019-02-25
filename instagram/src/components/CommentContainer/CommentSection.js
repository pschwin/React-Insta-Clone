import React from 'react';
import Comment from './Comment';

const CommentSection = props =>{

    return (
        
        <div className="comment-section">
        
        console.log(props.instaComments)
        
        {props.instaComments.map((comment, index) =>(

            <Comment commentArray = {comment} key = {index} />
            
        ))} 
        </div>
    )
}

export default CommentSection;