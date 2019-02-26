import React from 'react';

//
const Posts = props =>{

    return(

        <div className="post-wrapper">
            <div className="user-info">
                <h3>{props.postWhatever.username}</h3>
                <img src= {props.postWhatever.thumbnailUrl} alt=""/>
            </div>
            <div className="post-picture">
                <img src={props.postWhatever.imageUrl} alt="" />
            </div>
            
        </div>

    )
}

export default Posts;