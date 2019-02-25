import React from 'react';

//
const Posts = props =>{

    return(

        <div className="post-wrapper">
            <div className="user-info">
                <h3>{props.arrayOfPosts.username}</h3>
                <img src= {props.arrayOfPosts.thumbnailUrl} alt=""/>
            </div>
            <div className="post-picture">
                <img src={props.arrayOfPosts.imageUrl} alt="" />
            </div>
            
        </div>

    )
}

export default Posts;