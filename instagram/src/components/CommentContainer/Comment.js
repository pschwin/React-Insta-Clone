import React from 'react';



const Comment = props =>{

    return(

        <div className="comment">
        
        {props.commentArray.text}
        
        </div>
    )
}

export default Comment;