import React from 'react';
import Comment from './Comment';

const CommentSection = props =>{

    return (
        
        <div className="comment-section">
 
        {props.comments.map((comment, index) =>(

            <Comment comment = {comment} key = {index} />
            
        ))} 
        </div>
    )
}

export default CommentSection;