import React from 'react';



const Comment = props =>{

    return(

        <div className="comment">
        
        <p>{props.comment.text}</p>
        
        </div>
    )
}

export default Comment;